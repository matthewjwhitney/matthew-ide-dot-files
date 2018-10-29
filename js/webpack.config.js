const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'public', 'dev', 'js'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({ lang: path.join(__dirname, './lang/en/index.js') }),
  ],
};
