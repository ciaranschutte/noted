const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require('webpack');

const configuration = require('./webpack.config');

module.exports = Object.assign({}, configuration, {
  mode: 'production',
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/monaco-editor/min/vs',
        to: 'vs',
      }
    ]),
    new CopyWebpackPlugin([{ from: 'public' }]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin({
      allChunks: true,
      filename: '[name].[hash].css',
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new BundleAnalyzerPlugin(),
  ],
});
