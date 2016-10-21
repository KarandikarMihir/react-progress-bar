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
		include: /node_modules/,
		loaders: ['style-loader', 'css-loader'],
	}, {
		test: /\.(eot|svg|ttf|woff|woff2)$/,
		loader: 'file-loader',
	}, {
		test: /\.(jpg|png|gif)$/,
		loaders: [
			'file-loader',
			'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
		],
	}, {
		test: /\.html$/,
		loader: 'html-loader',
	}, {
		test: /\.json$/,
		loader: 'json-loader',
	}, {
		test: /\.(mp4|webm)$/,
		loader: 'url-loader?limit=10000',
	},
];
