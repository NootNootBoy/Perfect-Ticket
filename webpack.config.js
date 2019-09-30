const webpack = require("webpack");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");


let config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js"
  },
  module: {
      rules: [{
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader', 'postcss-loader'],
        })
        }]
    },
    plugins: [
      new ExtractTextWebpackPlugin("styles.css")
    ]
}

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
module.exports = config;