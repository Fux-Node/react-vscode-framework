/* eslint-disable @typescript-eslint/naming-convention */
//@ts-check

'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { DefinePlugin, ProvidePlugin } = require('webpack');

const Alliases = {
  "@src": path.resolve(__dirname, "src"),
  "@styles": path.resolve(__dirname, "src", "pages", "styles")
};

const extensionConfig = {
  target: 'node',
  mode: 'none',

  entry: './src/extension.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    vscode: 'commonjs vscode'
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: Alliases
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader'
          }
        ]
      }
    ]
  },
  devtool: 'nosources-source-map',
  infrastructureLogging: {
    level: "log",
  },
};

const reactConfig = {
  entry: './src/pages/index.tsx',
  devtool: 'inline-source-map',
  mode: "production",
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  // @ts-ignore
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: Alliases,
    fallback: {
      path: require.resolve("path-browserify")
    }
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ProvidePlugin({
      process: "process/browser"
    }),
  ]
};
module.exports = [extensionConfig, reactConfig];