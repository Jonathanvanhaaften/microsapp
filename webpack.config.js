// const path = require('path')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const { HotModuleReplacementPlugin } = require('webpack')

// module.exports = (env, argv) => {
//   return {
//     entry: path.join(__dirname, 'src', 'app.js'),
//     output: {
//       path: path.resolve(__dirname, 'dist'),
//       filename: 'main.js'
//     },
//     plugins: [
//       new MiniCssExtractPlugin({
//         filename: '[name].bundle.css',
//         chunkFilename: '[id].css'
//       }),
//       new HotModuleReplacementPlugin(),
//     ],
//     devServer: {
//       open: true,
//       clientLogLevel: 'silent',
//       contentBase: './dist',
//       historyApiFallback: true,
//       hot: true,
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(jsx|js)$/,
//           include: path.resolve(__dirname, 'src'),
//           exclude: /node_modules/,
//           use: [{
//             loader: 'babel-loader',
//             options: {
//               presets: [
//                 ['@babel/preset-env', {
//                   "targets": {
//                     "node": "12"
//                   }
//                 }],
//                 '@babel/preset-react'
//               ]
//             }
//           }]
//         },
//         {
//           test: /\.css$/i,
//           include: path.resolve(__dirname, 'src'),
//           exclude: /node_modules/,
//           use: [
//             'style-loader',
//             {
//               loader: MiniCssExtractPlugin.loader,
//               options: {
//                 hmr: argv.mode === 'development'
//               }
//             },
//             {
//               loader: 'css-loader',
//               options: {
//                 importLoaders: 1
//               }
//             },
//             'postcss-loader'
//           ]
//         },
//       ]
//     },
//   }
// }






















const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css",
      chunkFilename: "index.css"
    }),
    // new HtmlWebPackPlugin({
    //   template: "./src/index.html",
    //   filename: "./index.html"
    // }),
  ]
}
