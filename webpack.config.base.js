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
};
