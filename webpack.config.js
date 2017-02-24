var resolve = require('path').resolve;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: resolve('client'),
  entry: {
    app: './app/app.module'
  },
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate-loader!babel-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};