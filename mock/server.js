var app = require('koa')();
var router = require('koa-router');


//首页广告
var homeAdData = require('./home/ad.js');
router.get('api/homead',function *(){
	this.body = homeAdData;
});

app.use(router.routers()).use(router.allowedMethods());
app.listen(3000);