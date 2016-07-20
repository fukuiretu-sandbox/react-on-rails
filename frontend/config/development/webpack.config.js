const path = require('path');
const glob = require("glob");
const _ = require('lodash');

const projectPath = path.join(__dirname, '../../../');
const jsPath = path.join(projectPath, 'frontend/src/javascripts');
const outputPath = path.join(projectPath, 'app/assets/javascripts/components');

entries = {};
_.each(glob.sync(jsPath + '/components/*.jsx'), (v) => {
  entries[path.basename(v, path.extname(v))] = v
});

module.exports = {
  cache: true,
  debug: true,
  entry: entries,
  output: {
    path: outputPath,
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
