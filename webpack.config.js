var path = require('path');
var webpack = require('webpack');

 module.exports = {
     entry: './js/app.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'app.bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                    presets: ['@babel/react', '@babel/preset-env'],
                    plugins: ['@babel/proposal-class-properties']
                 }
             },
             {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   // 'file-loader',
                   {
                     loader: 'url-loader',
                     options: {
                       limit: 300000, // Convert images < 8kb to base64 strings
                       name: 'images/[name].[ext]'
                     },
                   }
                 ]
             },
             {
                  test: /\.css$/i,
                  use: ['style-loader', 'css-loader'],
             },
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
