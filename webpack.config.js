const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/main.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules:[
            {
                test:/\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    },
    devServer:{
        open: true,
        port: 8899,
        hot: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, './public/index.html')
            }
        )
    ]
}