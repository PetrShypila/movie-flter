const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',

  entry: './src/index.js',

  output: {
    publicPath: '/',
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: false,
    hotOnly: true,
    overlay: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {from: './public', to: './'},
    ])
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /(\.css)$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
