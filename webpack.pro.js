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
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'x-react-tooltip'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'},
            {test: /\.html$/, use: 'html-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, 'node_modules', 'react')
        }
    },
    externals:{
        'react':'React',
        'react-dom':'ReactDOM'
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    mode: 'production'
}

module.exports = webpackConfig