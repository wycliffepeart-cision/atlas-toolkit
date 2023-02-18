const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', { targets: "defaults" }],
      //         ["@babel/preset-typescript"]
      //       ]
      //     }
      //   }
      // },
      {
        test: /\.tsx|\.ts?$/,
        use: {
          loader: 'ts-loader',
          options: {

            configFile: "tsconfig.webpack.json"
          }
        },
        exclude: /node_modules|\.d\.ts$/, // this line as well
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};