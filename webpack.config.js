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
        query: {
          presets: ["stage-0"]
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
