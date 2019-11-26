const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./webpack.base');

module.exports = merge(config, {
  entry: {
    'mt-docs': './site/desktop/main.js',
    'mt-mobile': './site/mobile/main.js'
  },
  devServer: {
    open: true,
    progress: true,
    stats: 'errors-only'
  },
  output: {
    path: path.join(__dirname, '../docs/dist'),
    publicPath: '/',
    chunkFilename: 'async_[name].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: {
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
          name: 'chunks'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['chunks', 'mt-docs'],
      template: path.join(__dirname, '../site/desktop/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['chunks', 'mt-mobile'],
      template: path.join(__dirname, '../site/mobile/index.html'),
      filename: 'mobile.html'
    })
  ]
});
