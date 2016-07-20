// const DEBUG = !process.argv.includes('--release');
const DEBUG = true;

module.exports = {
  cache: DEBUG,
  debug: DEBUG,

  entry: {
    Greet: "./frontend/js/components/greet.jsx"
  },
  output: { path: './app/assets/javascripts/components', filename: '[name].js' },
  devtool: DEBUG ? 'inline-source-map' : false,
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

// const path = require('path');
// const webpack = require('webpack');
//
// module.exports = {
//   entry: {
//     components: "./frontend/js/components.js"
//   },
//   output: {
//     path: path.join(__dirname, '../../../app/assets/javascripts/'),
//     filename: '[name].js',  // このままならmain.jsが作成される
//     publicPath: 'http://localhost:4000/',
//     hot: true
//   },
//   module: {
//     loaders: [
//       {
//         loaders: ['react-hot', 'babel?cacheDirectory=true,presets[]=es2015,presets[]=react'],
//         exclude: /node_modules/,
//         test: /\.js[x]?$/
//       }
//     ]
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NoErrorsPlugin()
//   ],
//   resolve: {
//     extensions: ['', '.js', '.jsx'],
//     modulesDirectories: ['node_modules']
//   },
//   devServer: {
//     contentBase: '../public/dist',
//     port: 4000
//   },
// };
