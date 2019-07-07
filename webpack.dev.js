/**
 * name:
 * desc:
 * date: 2019/7/6
 * author: kelvin
 */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

webpackConfig = {
    entry: {
        appDemo: './example/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({template: './example/index.html'}),
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9001
    },
    mode: 'development'
}

module.exports = webpackConfig