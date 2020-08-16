import Router from 'koa-router';
import ingredients from './controllers/ingredients';

const router = new Router();

router.get('/', ingredients.searchFor);

export default router;
