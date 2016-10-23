module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|public)/,
		loader: 'babel',
		query: {
			presets: ['es2015', 'react']
		}
	}, {
		test: /\.css$/,
		exclude: /node_modules/,
		loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader',
	}, {
		test: /\.css$/,
		include: /node_modules/,
		loaders: ['style-loader', 'css-loader'],
	}
];
