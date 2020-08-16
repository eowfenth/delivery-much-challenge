import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import router from './src/routes';

const app = new Koa();

app.use(json());
app.use(logger());

app.use(router.routes()).use(router.allowedMethods());

app.listen(8081, () => {
    console.log('Challenge has started.');
});
