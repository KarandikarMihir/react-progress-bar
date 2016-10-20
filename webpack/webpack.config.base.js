const path = require('path');
const loaders = require('./webpack.loaders');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  },
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
