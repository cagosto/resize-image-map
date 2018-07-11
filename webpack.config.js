var path = require('path');
var dir = './public'

module.exports = {
  entry: dir + '/scripts/index.js',
  output: {
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          babelrc: './babelrc'
        }
      }
    ]
  },
  devServer: {
    publicPath: '/dist/'
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  watch: true
};
