var webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var jshint = require('jshint');
const extractSass = new ExtractTextPlugin( "styles.css");
module.exports = {
	context: __dirname,
	devtool: "eval-source-map",
	entry: "./src/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		publicPath: __dirname + "/dist"
	},
	module:{
		rules: [
		{
				test: /\.js$/, // include .js files
				enforce: "pre", // preload the jshint loader
				exclude: /node_modules/, // exclude any and all files in the node_modules folder
				use: [
					{
						loader: "jshint-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                fallback: "style-loader"
            })
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
				}
			},
			{
				test: /\.(jpe?g|png|gif|jpg)$/i,
				loaders: [
				'file?hash=sha512&digest=hex&name=[hash].[ext]',
				'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			} 
		]
	},
	
	plugins: [new webpack.optimize.UglifyJsPlugin({
		uglify :true,
		minimize: true,
		compress: {
			warnings: false
		},
		 output: {
        comments: false
    }
	}),extractSass],
	devServer: {
		inline:true,
		port: 8081
	}
}