const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = {
  entry: [
    path.join(process.cwd(), 'src/'),
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: pkg.name + '.js',
    library: pkg.name,
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
    	}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
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
