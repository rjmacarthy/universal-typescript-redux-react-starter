// webpack.config.dev.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: [
        './src/main'
    ],
    output: {
        path: path.join(__dirname, '/src/server/public/dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
       
    ],
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }]
    }
};