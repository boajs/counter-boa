var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: [
      path.join(__dirname, '.tmp/src/client.js')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};
