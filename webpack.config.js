const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: "./app/app.module.js",
  output: {
    uniqueName: "mfe2",
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {},
      name: "mfe2",
      filename: "mfe2-ngjs.js",
      exposes: {
        "./MFE2Module": "./app/app.module.js"
      }
    }),
    new HtmlWebPackPlugin({ template: './index.html'})
  ]
}