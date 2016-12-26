module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: './dist/public',
    filename: 'bundle.js'
  },

  devServer: {
    port: 1337,
    contentBase: './dist/public',
    inline: true,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
