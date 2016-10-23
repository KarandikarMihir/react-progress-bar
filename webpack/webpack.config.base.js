const path = require('path');
const loaders = require('./webpack.loaders');
const cssnext = require('postcss-cssnext');

module.exports = {
  entry: [
    'eventsource-polyfill', // Necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'src/app.js'), // Start with js/app.js
  ],
  output: {
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: loaders,
    postcss: function () {
        return [
          require('autoprefixer')
        ];
    },
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
