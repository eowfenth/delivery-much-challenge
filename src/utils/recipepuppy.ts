import axios from 'axios';

export interface RecipePuppyResponse {
    status: number;
    data: RecipePuppySuccessResponse | Error;
}
export interface RecipePuppySuccessResponse {
    title: string;
    version: number;
    href: string;
    results: {
        title: string;
        href: string;
        ingredients: string;
        thumbnail: string;
    }[];
}

export interface Error {
    message: string;
}

const recipepuppy = axios.create({
    baseURL: 'http://www.recipepuppy.com/api/',
    validateStatus: function (status) {
        return status >= 200 && status < 300;
    },
});

/**
 * Searches for recipes based on ingredients.
 * @param ingredients list of ingredients to use to find recipes
 * @param mainDish a main query to use besides the given ingredients
 * @param page number used as pagination
 */
const searchFor = async (
    ingredients: string[],
    mainDish: string | null,
    page: number,
): Promise<RecipePuppyResponse> => {
    let response;
    try {
        response = await recipepuppy({
            params: {
                i: ingredients.join(','),
                q: mainDish,
                p: page,
            },
        });
    } catch (err) {
        console.error(JSON.stringify(err));
        return {
            status: 503,
            data: { message: 'Internal Server Error. Serviço indisponível.' },
        };
    }

    return {
        status: 200,
        data: response.data,
    };
};

export default { searchFor };
