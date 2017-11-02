var koa = require('koa');

var bodyParser = require('koa-bodyparser')

const controller = require('./constrollers');

var app = new koa();

app.use(async(ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(bodyParser());

app.use(controller());

app.listen(3000);

console.log('app is running at port 3000');