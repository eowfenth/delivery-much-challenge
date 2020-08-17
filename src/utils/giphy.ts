import giphyClient from 'giphy-api';
import dotenv from 'dotenv';

dotenv.config();

export interface GiphyResponse {
    status: number;
    data: GiphySuccessResponse | GiphyErrorResponse;
}

export interface GiphySuccessResponse {
    url: string;
}

interface GiphyErrorResponse {
    message: string;
}

const giphy = giphyClient(process.env.GIPHY_API_KEY);

/**
 * Searches for gifs and return the first found item;
 * @param content text used to be used as query in Giphy API
 */
const search = async (content: string): Promise<GiphyResponse> => {
    let response;
    try {
        const gif = (await giphy.search(content)).data.shift();
        response = { url: gif?.bitly_url ?? '' };
    } catch (err) {
        console.error(JSON.stringify(err));
        return {
            status: 503,
            data: { message: 'Internal Server Error. Serviço indisponível.' },
        };
    }

    return {
        status: 200,
        data: response,
    };
};

export default { search };
