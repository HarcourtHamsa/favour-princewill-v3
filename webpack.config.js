const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const pageNames = ["experience", "e-plaza"];

const newPagesConfig = pageNames.map((page) => {
  return new HTMLWebpackPlugin({
    template: `./src/${page}.html`,
    filename: `${page}.html`,
  });
});

module.exports = {
  mode: "production",
  entry: {
    index: "./src/app.js",
    locomotive_scroll_min : './src/lib/locomotive-scroll.min.js'
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "[name].bundle.js",
    assetModuleFilename: "[name][ext]",
  },

  devServer: {
    port: 3000,
    hot: true,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(png|jpeg|jpg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "Favour Princewill - Digital Designer",
    }),
  ].concat(newPagesConfig),
};
