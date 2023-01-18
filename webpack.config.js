const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (_, argv) => {
  const isDevelopment = argv.mode !== "production";

  return {
    entry: { index: "./src/js/index.js" },
    output: {
      filename: "[name].bundle.js", //entry 기반으로 동적으로 생성
      path: path.resolve(__dirname, "./build"),
      clean: true, //사용하는 파일만 생성되도록 build 폴더 정리
      publicPath: "/", //기본 경로
    },
    devServer: {
      port: 3000,
      hot: true,
      historyApiFallback: true, //클라이언트단에서 url처리
    },
    // devtool: isDevelopment ? "eval-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              cacheCompression: false,
              compact: !isDevelopment,
            },
          },
        },
        {
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./index.html" }),
      new MiniCssExtractPlugin({ filename: "./style.css" }),
    ],
    performance: {
      // hints: isDevelopment ? "warning" : "error",
      hints: false,
    },
  };
};
