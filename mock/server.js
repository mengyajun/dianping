const homead = require('./home/ad.js');
const listdata = require('./home/listdata.js')
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
router.get('/api/listdata',function(ctx,next){
	ctx.body = listdata;
})
app.listen(3000);