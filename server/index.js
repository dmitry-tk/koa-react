const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
let router = new Router();

const koaViwes = require('koa-views');
const koaStatic = require('koa-static');


app.use(koaStatic(__dirname + '/../frontend/build'));
app.use(koaViwes(__dirname + '/../frontend/build', {
  extension: 'html',
  map: {
    html: 'handlebars'
  }
}));


router.get('/test', (ctx, next) => {
  ctx.body = 'Hello World!';
});

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
  });
});


app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
