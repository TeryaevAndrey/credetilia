const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

const pages = ["index", "form"]

module.exports = {
  entry: {
    main: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new miniCssExtractPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/images"),
          to: "images"
        } 
      ]
    })
  ].concat(pages.map(page => new htmlWebpackPlugin({
    template: path.resolve(__dirname, `src/${page}.html`),
    filename: `${page}.html`
  }))),
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    }
  }
}