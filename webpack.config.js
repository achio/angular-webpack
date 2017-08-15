const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const BASE_PATH = __dirname;
const SRC_PATH = "./src/";
const DIST_PATH = "/dist";

const config = {
    target : 'web', // 指定代码目标环境
    // 入口文件
    entry : {
    	index : SRC_PATH + "index.js",
    },
    // 输出位置
    output : {
    	path : BASE_PATH + DIST_PATH,
    	filename : "[name].bundle.js"
    },
    // resolve : {
    //     modulesDirec
    // },
    // loader 配置
    module : {
    	rules : [
    		{
    			test : /\.txt$/,
    			use  : 'raw-loader'
    		},
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel-loader',
                query:{ presets: ['es2015'] }
            },
            {
                test : /\.css$/,
                use : [
                    {
                        loader : 'style-loader'
                    },{
                        loader : 'css-loader'
                    }
                ]
            }
    	]
    },
    // 插件设置
    plugins : [
    	new webpack.optimize.UglifyJsPlugin(),
    	new HtmlWebpackPlugin({template : './index.html'})
    ]
};
module.exports = config;