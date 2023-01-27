const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");


module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(__dirname, "./src/app.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Racing Car",
      filename: "index.html",
      template: "./src/indexTemp.html",
      chunks: ["app"],
    }),
    new MiniCssWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    hot: true,
    compress: true,
    port: 4000,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssWebpackPlugin.loader, "css-loader"],
      },
    ],
  },
};
