const path = require("path");
const {findInDir} = require("./utils");

module.exports = env => ({
  entry: `${findInDir(env.ex)}`,
  mode: 'development',
  output: {
     filename: 'bundle.js',
     path: path.resolve(__dirname, 'dist'),
    },
  devServer: {
    contentBase: __dirname,
    publicPath: "/dist/",
    compress: true,
    port: 3001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
});