const Koa = require('koa');

const router = require('koa-router')(); // 这里返回的是函数。

const bodyParser = require('koa-bodyparser'); // 解析post请求中的 body 数据。

const app = new Koa();

// ctx => { request , response }
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

router.get('/page/:name', async(ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello ${name}!</h1>`;
});

router.get('/', async(ctx, next) => {
    ctx.response.body = `<h1>Index</h1>\
    <form action="/signin" method="post">\
        <p>Name: <input name="name" value="koa"></P>\
        <p>Password: <input name="password" type="password"></p>\
        <p><input type="submit" value="Submit"></p>\
    </form>`;
});

router.post('/signin', async(ctx, next) => {
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`signin with name: ${name} , password: ${password}`);
    if (name === 'admin' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = '<h1>Login failed!</h1>\
        <p><a href="/">Try again</a></p>';
    }
});

app.use(bodyParser()); // 必须在路由之前。

app.use(router.routes());

app.listen(3000);

console.log('app start at port 3000');