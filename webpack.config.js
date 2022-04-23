const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env',
                    '@babel/react']}
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: 'css-loader',
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          'url-loader'
        ]
    }
    ],
  },
  externals: {
      react: "react"
  }
};