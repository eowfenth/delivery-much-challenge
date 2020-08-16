import Router from 'koa-router';

const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = { message: 'Challenge has started!' };

    await next();
});

export default router;
