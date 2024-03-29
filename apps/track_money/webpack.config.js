const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',

  devtool: isDevelopment ? 'eval-source-map' : 'source-map',

  entry: path.resolve(__dirname, 'src', 'index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
          },
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        }
      },
    ]
  }
}
