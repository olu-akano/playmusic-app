# Create folders
mkdir config src public

# Stub files
touch \
    .gitignore \
    .babelrc \
    src/index.js \
    config/webpack.config.js \
    config/dev.webpack.config.js \
    public/index.html

# Populate files
tee -a .gitignore <<DOC
node_modules
.coverage
.DS_Store
DOC

tee -a public/index.html <<DOC
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GT Reacts</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
DOC
 
tee -a .babelrc <<DOC
{
  "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
  ],
  "plugins": [
      "@babel/plugin-transform-runtime"
  ]
}
DOC

tee -a src/index.js << DOC
import React from 'react';
import ReactDOM from 'react-dom';
const App = () => <h1>Hello World!</h1>
ReactDOM.render(<App />, document.getElementById('root'));
DOC

tee -a config/dev.webpack.config.js << DOC
const config = require('./webpack.config.js');

config.devServer = {
  historyApiFallback: true,
  port: 8080,
  liveReload: true
};

config.devtool = 'inline-source-map';

module.exports = config;
DOC

tee -a config/webpack.config.js << DOC
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}
DOC

# Create npm package & install dependencies
npm init -y

npm i -D \
    webpack webpack-cli webpack-dev-server html-webpack-plugin \
    babel-loader style-loader css-loader file-loader \
    @babel/core @babel/preset-env \
    @babel/plugin-transform-runtime \
    @babel/preset-react

npm i \
    react \
    react-dom

# Add npm scripts
npx npm-add-script \
  -k "dev" \
  -v "webpack serve --mode development --config config/dev.webpack.config.js" \
  --force

npx npm-add-script \
  -k "build" \
  -v "webpack --mode production" \
  --force

# Initialise git repository
git init