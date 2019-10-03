const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const babelConfig = require('./.babelrc.js')

module.exports = function setupWebpackConfiguration() {
  return {
    mode: 'production',
    entry: path.join(__dirname, './src/index.js'),
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      path: path.join(__dirname, './dist'),
      publicPath: '/dist/',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ['vue-loader'],
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: babelConfig,
          },
        },
      ],
    },
    resolve: {
      alias: {
        CustomComponent: path.join(__dirname, './custom_component_storage'),
      },
    },
    plugins: [new VueLoaderPlugin()],
  }
}
