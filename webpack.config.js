var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');
// var autoprefixer = require('autoprefixer')

module.exports = {
	entry: path.resolve(__dirname,'app/index.jsx'),
	output:{
		path:__dirname+'/build',
		filename:'bundle.js'
	},
	module:{
		rules:[
			{ test:/\.(js|jsx)$/,
			  exclude:/node_modules/,
			  use:['babel-loader']
			},
			{ test:/\.less$/,
			  exclude:/node_modules/,
			  use:['style-loader','css-loader','less-loader']
			},
			{ test:/\.css$/,
			  exclude:/node_modules/,
			  // use:extractTextPlugin.extract({
			  // 	use: ['style-loader',
     //     			  'css-loader'
     //  				 ]
			  // })
			  use:['style-loader','css-loader']
			},
			{
				test:/\.(png|gif|jpg|jpeg|bmp)$/i,
				use:['url-loader?limit=5000']
			},
			 { test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i, 
			   loader:'url-loader?limit=5000'
			  } // 限制大小小于5k
		]
	},

	plugins:[
		// new webpack.LoaderOptionsPlugin({
		// 	options:{
		// 		postcss:[autoprefixer()]
		// 	}
		// }),

		new extractTextPlugin('style.css'),

		new htmlWebpackPlugin({
			template:__dirname + '/app/index.html'
		}),

		new openBrowserPlugin({
			url:'http://localhost:8080'
		}),

		new webpack.HotModuleReplacementPlugin(),
	],
	devServer:{
		// proxy:{
		// 	'api':{
		// 		target:'',
		// 		secure:false
		// 	}
		// },
		historyApiFallback:true,
		inline:true,
		hot:true,
	},
}
