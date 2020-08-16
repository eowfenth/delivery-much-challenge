import Router from 'koa-router';
import ingredients from './controllers/ingredients';

const router = new Router();

router.get('/recipes', ingredients.searchFor);

export default router;
