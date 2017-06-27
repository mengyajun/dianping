# dianping
用react开发模拟大众点评的项目，里面包含的页面由登录页，主页，用户中心页，选择城市页面，搜索页，商品详情页，订单评价展示和评价页，基本算是一个完整的app</br>前端所用到的技术有webpack + es6 + react + react-router + redux，以下为package.json文件<br>
```
{
  "name": "dianping",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --progress --colors",
    "mock": "node ./mock/server.js",
    "build": "rm -rf ./build && webpack"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "autoprefixer": "^7.1.1",
    "es6-promise": "^4.1.0",
    "postcss-loader": "^2.0.5",
    "react": "^15.5.4",
    "react-addons-pure-render-mixin": "^15.5.2",
    "react-dom": "^15.5.4",
    "react-redux": "^5.0.5",
    "react-router": "^4.1.1",
    "react-router-dom": "^4.1.1",
    "react-swipe": "^5.0.8",
    "redux": "^3.6.0",
    "swipe-js-iso": "^2.0.3",
    "webpack": "^2.6.1",
    "webpack-dev-server": "^2.4.5",
    "whatwg-fetch": "^2.0.3"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.1",
    "babel-core": "^6.24.1",
    "babel-loader": "^7.0.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^0.28.4",
    "extract-text-webpack-plugin": "^2.1.0",
    "file-loader": "^0.11.2",
    "html-webpack-plugin": "^2.28.0",
    "json-loader": "^0.5.4",
    "koa": "^2.2.0",
    "koa-router": "^7.2.0",
    "less": "^2.7.2",
    "less-loader": "^4.0.4",
    "open-browser-webpack-plugin": "0.0.5",
    "style-loader": "^0.18.1",
    "url-loader": "^0.5.8"
  }
}
```
后端采用koa框架来mock数据。<br>
由于使用的版本都比较新，踩了很多坑，可是还是最后通过各种方法还是解决了，收获很多。


