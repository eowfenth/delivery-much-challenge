import { ParameterizedContext, Next } from 'koa';

interface IngredientsResponse {
    keywords: string[];
    recipes: {
        title: string;
        ingredients: string[];
        link: string;
        gif: string;
    }[];
}
const querystringParser = (querystring: string): string[] => {
    const parsedContent = querystring.replace(/\s*,\s*/g, ',').split(',');

    return parsedContent;
};

const searchFor = async (ctx: ParameterizedContext, next: Next): Promise<void> => {
    if (!ctx.request.query && !ctx.request.query.i) {
        ctx.body = { status: 400, message: 'Bad Format. You need to pass ingredients' };
    }

    const parsedQuerystring = querystringParser(ctx.request.query.i);

    const body: IngredientsResponse = {
        keywords: parsedQuerystring,
        recipes: [],
    };

    ctx.body = body;

    await next();
};

export default { searchFor };
