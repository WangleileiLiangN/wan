const path = require ("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin ({
	template:path.join(__dirname,'./src/index.html'),
	filename:'index.html'
})


module.exports = {
	mode:'production',
	plugins:[
		htmlPlugin
	],
	module:{
		rules:[{
			test:/\.js|jsx$/,loader:'babel-loader',exclude:/node_modules/,
			query:{
				presets:['env','react','stage-0'],
				plugins:['transform-runtime']
			}
			
		}]
	}
}
