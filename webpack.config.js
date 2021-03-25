const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'test',
    libraryTarget: 'window',
    libraryExport: 'default'
  },
  plugins: [
    new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"]
    }
    ),
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"]},
      { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]},
      { test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf)$/i, loader: 'file-loader', options: {name: '[path][name].[ext]' }, },
      { test: /\.js$/, loader: "babel-loader", exclude: /(node_modules)/, }
    ]
  }
};