// Install webpack & webpack cli and get the path module and set mode, entry and output
// npm install webpack webpack-cli --save-dev

const myPath = require('path'); // Having the path module to set path for entry & output if we want outside default
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin to automatically create the index.html file in the /dist directory.

// npm install --save lodash (optional)
// const { template } = require('lodash');

module.exports = {
  // webpack mode, entry and output config:
  // in package.json add (under) "scripts":{ "build": "webpack"}
  // Now, in the CLI run: [ $ npm run build ] to build your source.
  mode: 'production',
  entry: { mymain: myPath.resolve(__dirname, 'src/index.js') },
  output: {
    path: myPath.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },

  // webpack css loaders (style-loder, css-loader) config:
  // npm install --save-dev style-loader css-loader
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // webpack Html plugin for auto generating HTML under dist
  // npm install --save-dev html-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  // webpack dev server to setup local dev server
  // npm install --save-dev webpack-dev-server
  // And, in package.json add (under) "scripts": { start: "webpack serve --open"}
  // Now, in the CLI run: [ $ npm start ] to start the local dev server at: http://localhost:8080/.
  devServer: {
    static: './dist',
  },

  optimization: {
    runtimeChunk: 'single',
  },

};
