const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./app/app.module.js",
  output: {
    uniqueName: "mfe2",
    filename: "bundle.js",
    // path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".webpack.js", ".js"]
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        "angular": { singleton: true, eager: true, strictVersion: true }
      },
      name: "mfe2",
      filename: "mfe2-ngjs.js",
      exposes: {
        "./MFE2Module": "./app/app.module.js"
      }
    }),
    new HtmlWebPackPlugin({ template: './index.html'})
  ],
  devServer: {
    port: 4350
  }
}