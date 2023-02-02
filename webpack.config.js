import { path } from "./gulp/config/path.js";

export default {
  mode: path.isBuild ? "production" : "development",
  output: {
    filename: "app.js",
  },
  devtool: path.isDev ? "source-map" : false,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
