const path = require('path');
const { styleHandler } = require('./build/style-loader');

module.exports = {
  chainWebpack: (config) => {
    config
      .entry('app')
      .clear()
      .add('./site/main.js');

    config.resolve.alias
      .set('@', path.resolve(__dirname, ''));

    styleHandler(config.module);

    config.plugin('html')
      .tap((args) => {
        args[0].template = './site/public/index.html';
        return args;
      });
  },
};
