module.exports = {
  entry: './index.js',
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
  stats: {
    colors: true
  },
  devtool: 'source-map',
  watch: true
};
