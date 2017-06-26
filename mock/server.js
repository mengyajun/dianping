
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
	let itemId = ctx.params.id;
	let itemInfo;
	 detailInfo.map((item,index) => {
		if(item.id == itemId ){
			itemInfo = item
			return false;
		}  
	})
	ctx.body = itemInfo;
})

const detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:id',function(ctx,next){	
	ctx.body = detailComment;	
})

router.get('/api/listdata/:city/:page',function(ctx,next){
	// console.log(ctx.params);
	const params = ctx.params;
	const paramCity = params.city;
	const paramPage = params.page;
	ctx.body = listdata;
})
app.listen(3000);