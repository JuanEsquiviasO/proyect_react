module.exports = {
	entry: './source/client.js',
	output: {
		filename: 'app.js',
		path: './built/statics',
	},
	module: {
		loaders: [
			{
			test: /\.json$/,
			loader: 'json',
			},
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /(node_modules)/,
				query: {
					presets: ['es2016', 'es2017', 'react'],
					plugins: ['transform-es2015-modules-commonjs'],
				}
			}
		]
	},
	target: 'web',
};


// List has recently changed its name, now this library is called serve, to install it runs sudo npm i -g serves To start the server run serve built / statics --port 3001 - cache 0