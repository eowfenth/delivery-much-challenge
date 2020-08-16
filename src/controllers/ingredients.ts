import { ParameterizedContext, Next } from 'koa';
import RecipePuppy, { RecipePuppyResponse, RecipePuppySuccessResponse } from '../utils/recipepuppy';
import Giphy, { GiphySuccessResponse } from '../utils/giphy';
interface IngredientsResponse {
    keywords: string[];
    recipes: {
        title: string;
        ingredients: string[];
        link: string;
        gif: string;
    }[];
}

const parseIngredients = (querystring: string): string[] => {
    const parsedContent = querystring.replace(/\s*,\s*/g, ',').split(',');

    return parsedContent;
};

const obtainRecipesMedia = async (content: IngredientsResponse['recipes']): Promise<IngredientsResponse['recipes']> => {
    return Promise.all(
        content.map(async (recipe) => {
            const gif = await Giphy.search(recipe.title);

            return {
                ...recipe,
                gif: gif.status === 200 ? (gif.data as GiphySuccessResponse).url : '',
            };
        }),
    );
};

const formatRecipes = (response: RecipePuppySuccessResponse): IngredientsResponse['recipes'] => {
    return response.results.map((item) => ({
        title: item.title,
        ingredients: parseIngredients(item.ingredients),
        link: item.href,
        gif: '',
    }));
};

const searchFor = async (ctx: ParameterizedContext, next: Next): Promise<void> => {
    if (!ctx.request.query && !ctx.request.query.i) {
        ctx.body = { status: 400, message: 'Bad Format. You need to pass ingredients' };
    }

    const ingredientsList = parseIngredients(ctx.request.query.i);

    if (ingredientsList.length >= 3) {
        ctx.body = { status: 400, message: 'Bad Format. You must have up to 3 ingredients.' };
    }

    const page = ctx.request.query.p ?? 1;
    const response: RecipePuppyResponse = await RecipePuppy.searchFor(ingredientsList, null, page);

    if (response.status === 200) {
        console.log(response.data);
        let recipes = formatRecipes(response.data as RecipePuppySuccessResponse);
        recipes = await obtainRecipesMedia(recipes);

        const body: IngredientsResponse = {
            keywords: ingredientsList,
            recipes,
        };

        ctx.body = body;
    } else {
        ctx.body = response;
    }

    await next();
};

export default { searchFor };
