module.exports = {
  cache: true,
  debug: true,
  entry: {
    Greet: "./frontend/js/components/greet.jsx"
  },
  output: {
    path: './app/assets/javascripts/components',
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
