const path = require('path');
const { styleHandler } = require('./build/style-loader');

module.exports = {
  pages: {
    mobile: {
      entry: 'site/mobile/main.js',
      template: path.resolve(__dirname, 'site/mobile/index.html'),
      filename: 'mobile.html',
      chunks: ['mobile']
    },
    desktop: {
      entry: 'site/desktop/main.js',
      template: path.resolve(__dirname, 'site/desktop/index.html'),
      filename: 'index.html',
      chunks: ['desktop']
    },
  },
  devServer: {
    hot: true,
  },
  chainWebpack: (config) => {
    // config.module
    //   .rule('vue')
    //   .test(/\.vue$/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .options(Object.assign({
    //     include: './node_modules/@vant/doc/src'
    //   }));

    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('@vant/markdown-loader')
      .loader('@vant/markdown-loader');

    styleHandler(config.module);
  },
};
