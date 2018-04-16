const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let options = [
	//01
	{
		entry: { main: './src/index.js' },
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, './dist'),
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: ['babel-loader']
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader?minimize']
				},
				{
					test: /\.scss$/,
					use: ['style-loader', 'css-loader?minimize', 'sass-loader']
				},
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						'file-loader'
					]
				}
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'zbc.react',
				filename: 'main.html',
				template: './public/index.html'
			})
		],

		//输出 source-map 以方便调试ES6远源码
		devtool: 'source-map'
	}

];

module.exports = options;
