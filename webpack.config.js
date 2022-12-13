const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: `${__dirname}/dist`,
  },
  devServer: {
    static: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })]
}