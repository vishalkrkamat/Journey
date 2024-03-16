const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { script: "./src/Js/main.js" },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    clean: true,
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Rule for CSS files
        use: ["style-loader", "css-loader"], // Loaders to process CSS
      },
      {
        test: /\.html$/, // Rule for HTML files
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // Rule for image files
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]", // Preserves the original filename
              outputPath: "images", // Output directory for images within 'dist'
            },
          },
        ],
      },
    ],
  },
};
