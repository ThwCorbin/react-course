const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [{
      loader: "babel-loader",
      // test for files ending with .js, then load through babel
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};