var path = require('path');
var loaders = require('./webpack.loaders');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: loaders
  }
};
