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
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  devServer: {
    publicPath: '/dist/',
    contentBase: dir
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  watch: true
};
