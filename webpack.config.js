const path = require('path');
const webpack = require('webpack');
const camelCase = require('camelcase');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const pkg = require('./package.json');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = {
  entry: [
    path.join(process.cwd(), 'src/'),
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: 'bundle.js',
    library: capitalizeFirstLetter(camelCase(pkg.name)),
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    },
  },
  module: {
    loaders: [
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
    	},
    ],
    postcss: function () {
        return [
          require('autoprefixer')
        ];
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
  ],
  resolve: {
    root: [path.resolve(process.cwd(), 'src'), path.resolve(process.cwd(), 'node_modules')],
    extensions: [
      '',
      '.js',
      '.jsx',
      '.react.js',
    ],
  },
};
