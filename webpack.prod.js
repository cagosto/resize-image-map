module.exports = {
  entry: './image-resize.js',
  output: {
    filename: './build/img.js'
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
  }
};
