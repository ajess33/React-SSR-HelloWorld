var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var browserConfig = {
  entry: './src/browser/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true'
    })
  ]
};

var serverConfig = {
  entry: './src/server/index.js',
  mode: 'development',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false'
    })
  ]
};

module.exports = [browserConfig, serverConfig];
