const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      { test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(png|jpe?g|gif|svg|eot|woff|woff2|ttf)$/i, loader: "file-loader", options: { name: "[path][name].[ext]" } },
      { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /(node_modules)/ },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  resolve: { extensions: [".js", ".jsx"] },
};
