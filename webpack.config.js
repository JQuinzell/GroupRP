const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}