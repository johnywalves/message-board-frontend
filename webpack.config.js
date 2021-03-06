const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: __dirname + '/build/',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            assets: __dirname + '/src/assets',
            components: __dirname + '/src/components',
            reducers: __dirname + '/src/reducers',
            main: __dirname + '/src/main',
            views: __dirname + '/src/views'
        }
    },
    module: {
        rules: [{
            test: /.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                    plugins: ['transform-object-rest-spread']
                }
            }]
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader"
            ]
        },
        {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            use: [{
                loader: 'file-loader'
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: 'app.css', chunkFilename: "chunk.css" })
    ]
}