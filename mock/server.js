const homead = require('./home/ad.js')
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

app.use(router['routes']());

router.get('/',function(ctx,next){
	ctx.body = "index";
})
router.get('/api/homead',function(ctx,next){
	ctx.body = homead;
})
app.listen(3000);