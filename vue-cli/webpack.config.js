const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'none',
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "/"),
    compress: true,
    port: 9000
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname,'./index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue: 'vue/dist/vue',
      '@':path.resolve(__dirname,'./src')
    }
  }
}