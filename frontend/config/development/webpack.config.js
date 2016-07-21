const path = require('path');
const glob = require('glob');
const _ = require('lodash');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const projectPath = path.join(__dirname, '../../../');
const frontendPath = path.join(projectPath, 'frontend');
const jsPath = path.join(frontendPath, 'src/javascripts');
const jsOutputPath = path.join(projectPath, 'app/assets/javascripts/components');
const stylePath = path.join(frontendPath, 'src/stylesheets');
const styleOutputPath = path.join(projectPath, 'app/assets/stylesheets');
const jsEntries = {};
_.each(glob.sync(`${jsPath}/components/*.jsx`), (v) => {
  jsEntries[path.basename(v, path.extname(v))] = v;
});

const jsConfig = {
  cache: true,
  debug: true,
  entry: jsEntries,
  output: {
    path: jsOutputPath,
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.js[x]?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  eslint: {
    configFile: `${frontendPath}/.eslintrc`,
  },
};

const styleConfig = {
  entry: {
    style: `${stylePath}/main.js`,
  },
  output: {
    path: styleOutputPath,
    filename: '[name].css',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
};

module.exports = [jsConfig, styleConfig];
