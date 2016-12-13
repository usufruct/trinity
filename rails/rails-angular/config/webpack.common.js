var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

console.log(__dirname);

module.exports = {
  // the base path which will be used to resolve entry points
  context: __dirname,
  // the main entry point for frontend JS
  entry: {
    'polyfills': '../app/frontend/javascripts/polyfills.ts',
    'vendor': '../app/frontend/javascripts/vendor.ts',
    'app': '../app/frontend/javascripts/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      }
      // },
      // {
      //   test: /\.html$/,
      //   loader: 'html'
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      //   loader: 'file?name=assets/[name].[hash].[ext]'
      // },
      // {
      //   test: /\.css$/,
      //   exclude: helpers.root('src', 'app'),
      //   loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      // },
      // {
      //   test: /\.css$/,
      //   include: helpers.root('src', 'app'),
      //   loader: 'raw'
      // }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    // new HtmlWebpackPlugin({
    //   template: 'src/index.html'
    // })
  ]
};
