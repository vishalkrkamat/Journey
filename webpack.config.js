const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: { script: "./src/Js/main.js" },
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory for bundled files
    filename: "[name].bundle.js",
    clean: true,
    // publicPath: "/",
  },
  devtool: "inline-source-map",

  devServer: {
    // static: "./dist",
    static: [
      path.join(__dirname, "dist"), // Serve HTML from 'src' directory
      "./dist/index.html", // Still serve files from 'dist' if needed for assets
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Journey",
      template: "./src/index.html",
    }),
  ],
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
        test: /\.(js)$/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif|svg|PNG)$/, // Rule for image files
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
