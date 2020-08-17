import request from 'supertest';
import server from '../app';

describe('Recipes route behavior', () => {
    test('if no querystring was given', async () => {
        const response = await request(server).get('/recipes');
        expect(response.status).toEqual(400);
    });

    test('if at least one ingredient was given', async () => {
        const response = await request(server).get('/recipes?i=onion');
        expect(response.status).toEqual(200);
    });

    test('if more than 3 ingredients was given', async () => {
        const response = await request(server).get('/recipes?i=onion, garlic, rice, beans');
        expect(response.status).toEqual(400);
    }, 10000);
});

afterAll(() => {
    server.close();
    console.log('Closing server...');
});
