const path = require('path');
const fs = require('fs');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('css-minimizer-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');

const srcPath = path.resolve(__dirname, 'src/views/pages');
const pugPages = fs
  .readdirSync(srcPath)
  .filter((file) => path.extname(file) === '.pug');

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'source-map' : false,
  entry: {
    main: path.resolve(__dirname, 'src/scripts/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/[name].js',
    assetModuleFilename: (pathData) => {
      const relativePath = path
        .relative(
          path.resolve(__dirname, 'src'),
          path.dirname(pathData.filename)
        )
        .replace(/\\/g, '/');
      return `${relativePath}/[name][ext]`;
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    hot: false,
    compress: true,
    historyApiFallback: true,
    port: 8000,
    client: {
      logging: 'none',
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/assets'),
    },
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/assets/icons/'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              spriteFilename: 'sprite.svg',
              publicPath: 'assets/',
            },
          },
          'svg-transform-loader',
          {
            loader: 'svgo-loader',
            options: {
              configFile: path.resolve(__dirname, 'svgo.config.js'),
            },
          },
        ],
      },
      {
        test: /\.(webp|jpe?g|png|svg|gif|ico|mp4)$/,
        include: path.resolve(__dirname, 'src/assets/img/'),
        type: 'asset/resource',
      },
      {
        test: /.*$/,
        include: path.resolve(__dirname, 'src/assets/resources/'),
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src/assets/fonts/'),
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    ...pugPages.map(
      (pugPage) =>
        new HtmlWebpackPlugin({
          filename: pugPage.replace('.pug', '.html'),
          template: path.resolve(srcPath, pugPage),
        })
    ),
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].css',
    }),
    new SpritePlugin({
      plainSprite: true,
    }),
  ],
};
