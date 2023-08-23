module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    filename: "abi-decoder2.js",
    libraryTarget: "var",
    library: "abiDecoder2",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
