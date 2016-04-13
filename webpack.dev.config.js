var webpack = require('webpack');
var path = require('path');

var port = 3000;

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/dev-server',
      path.join(__dirname, '.tmp/src/client.js')
    ]
  },
  devtool: [
    'source-map'
  ],
  devServer: {
    port: port,
    contentBase: './dist/'
  },
  module: {
    preLoaders: [
      { loader: 'source-map-loader', test: /\.js$/ }
    ]
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
