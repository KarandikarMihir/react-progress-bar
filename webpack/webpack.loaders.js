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
		loaders: ['style-loader', 'css-loader'],
	}
];
