const baseConfiguration = require('./webpack/webpack.config.base');
const devConfiguration = require('./webpack/webpack.config.dev');
const prodConfiguration = require('./webpack/webpack.config.prod');

const customConfiguration = process.env.NODE_ENV === 'production' ? prodConfiguration : devConfiguration;

module.exports = Object.assign(
  {},
  baseConfiguration,
  customConfiguration
);
