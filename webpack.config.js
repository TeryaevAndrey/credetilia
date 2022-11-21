const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");

const pages = [
  "index",
  "form",
  "blog",
  "article",
  "expectation",
  "redirect",
  "fid",
  "account",
];

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    alias: {
      images: path.resolve(__dirname, "src/images"),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new miniCssExtractPlugin(),
    new copyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/images"),
          to: "images",
        },
        {
          from: path.resolve(__dirname, "./src/fonts"),
          to: "fonts",
        },
      ],
    }),
  ].concat(
    pages.map(
      (page) =>
        new htmlWebpackPlugin({
          inject: true,
          template: path.resolve(__dirname, `src/${page}.html`),
          filename: `${page}.html`,
          chunks: [page],
        })
    )
  ),
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },
};
