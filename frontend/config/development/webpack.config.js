const path = require('path');
const glob = require('glob');
const _ = require('lodash');
const projectPath = path.join(__dirname, '../../../');
const frontendPath = path.join(projectPath, 'frontend');
const jsPath = path.join(frontendPath, 'src/javascripts');
const outputPath = path.join(projectPath, 'app/assets/javascripts/components');

const entries = {};
_.each(glob.sync(`${jsPath}/components/*.jsx`), (v) => {
  entries[path.basename(v, path.extname(v))] = v;
});

module.exports = {
  cache: true,
  debug: true,
  entry: entries,
  output: {
    path: outputPath,
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
