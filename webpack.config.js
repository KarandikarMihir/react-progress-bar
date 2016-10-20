const baseConfiguration = require('./webpack.config.base');
const devConfiguration = require('./webpack.config.dev');
const prodConfiguration = require('./webpack.config.prod');

const customConfiguration = process.env.NODE_ENV === 'production' ? prodConfiguration : devConfiguration;

module.exports = Object.assign(
  {},
  baseConfiguration,
  customConfiguration
);
