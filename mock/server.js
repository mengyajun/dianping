
const listdata = require('./home/listdata.js')
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();

app.use(router['routes']());

router.get('/',function(ctx,next){
	ctx.body = "index";
})

const homead = require('./home/ad.js');
router.get('/api/homead',function(ctx,next){
	ctx.body = homead;
})

const detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id',function(ctx,next){	
	ctx.body = detailInfo;
	console.log(detailInfo)
})
router.get('/api/listdata/:city/:page',function(ctx,next){
	// console.log(ctx.params);
	const params = ctx.params;
	const paramCity = params.city;
	const paramPage = params.page;
	ctx.body = listdata;
})
app.listen(3000);