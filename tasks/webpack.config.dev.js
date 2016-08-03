var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname, '../');
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

var PROD = (process.env.NODE_ENV === 'production');

var config = {
	devtool: PROD ? null : 'cheap-module-eval-source-map',

	entry: PROD ? [
		'./src/app/index'
	] : [
		'eventsource-polyfill', // necessary for hot reloading with IE
		'webpack-hot-middleware/client',
		'./src/app/index'
	],

	output: {
		path: BUILD_PATH,
		// publicPath: 'dist/',
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: APP_PATH,
				loader: 'babel'
			},
			{
				test: /\.(jpe?g|png|svg)$/i,
				loaders: [
					'url-loader?hash=sha512&digest=hex&limit=10000&name=assets/[name].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
				]
			},
			{
				test: /\.(mp3|mp4|webm|ogg|json|gif|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=assets/[hash].[ext]'
			},
			{
				test: /\.css$/,
				loader: PROD ? ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') :
						'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
			},
			{
				test: /\.(woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?name=assets/[hash].[ext]&limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.modernizrrc$/,
				loader: "modernizr"
			}
		]
	},

	postcss: [
		require('stylelint')({
			extends: 'stylelint-config-standard',
			rules: {
				"string-quotes": "single",
				"indentation": "tab"
			},
			ignoreFiles: [path.resolve(ROOT_PATH, "node_modules/**/*.css")],
			quiet: true
		}),
		require('postcss-calc'), // Preprocess calc() functions
		require('precss'), // Preprocess calc() functions
		require('autoprefixer')({ browsers: ['last 2 versions'] }),
		require('postcss-reporter')({clearMessages: true})
	],

	plugins: (PROD ? [
		new ExtractTextPlugin('bundle.css', {allChunks: true}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.AggressiveMergingPlugin(),
	] : [
		new webpack.HotModuleReplacementPlugin(),
	]).concat([
		new webpack.NoErrorsPlugin(),
		new CleanPlugin(['dist/**/*.*']),
		new CopyPlugin([
			{ from: 'src/index.html' },
			{ from: 'src/.htaccess' },
			//{ from: 'src/favicon.ico' },
		]),
	]),

	resolve: {
		modulesDirectories: ['node_modules'],
		alias: {
			modernizr: path.resolve(ROOT_PATH, ".modernizrrc")
		}
	}
};

module.exports = config;