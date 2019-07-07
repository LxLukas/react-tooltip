/**
 * name:
 * desc:
 * date: 2019/7/6
 * author: kelvin
 */
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

webpackConfig = {
    entry: {
        index: './src/index.js'
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
        new CleanWebpackPlugin()
    ],
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src')
        }
    },
    mode: 'production'
}

module.exports = webpackConfig