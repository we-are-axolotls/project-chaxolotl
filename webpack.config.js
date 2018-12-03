const path = require("path");

module.exports = {
  entry: ["./src/client/index.js"],
  output: {
    path: path.join(__dirname, "/dist/"),
    publicPath: '/dist/',
    filename: "index-bundle.js"
  },
  
  devServer: {
		watchContentBase: true,
		compress: true,
		port: 3000
	}, 

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
		// allows users to leave off .js or .jsx when they import files
		extensions: ['.js', '.jsx']
	}
};