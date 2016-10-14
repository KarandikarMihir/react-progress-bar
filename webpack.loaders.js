module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|public)/,
		loader: 'babel',
		query: {
		  presets: ['es2015', 'react']
		}
	}
];
