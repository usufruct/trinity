var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    context: __dirname,
    // this is our app/assets/javascripts directory, which is part of the Sprockets pipeline
    path: path.join(__dirname, '..', 'app', 'assets', 'javascripts'),
    // the filename of the compiled bundle, e.g. app/assets/javascripts/bundle.js
    filename: 'bundle.js',
    // if the webpack code-splitting feature is enabled, this is the path it'll use to download bundles
    publicPath: '/assets',
  },

  // htmlLoader: {
  //   minimize: false // workaround for ng2
  // },

  // plugins: [
  //   new webpack.NoErrorsPlugin(),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
  //     mangle: {
  //       keep_fnames: true
  //     }
  //   }),
  //   new ExtractTextPlugin('[name].[hash].css'),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'ENV': JSON.stringify(ENV)
  //     }
  //   })
  // ]
});
