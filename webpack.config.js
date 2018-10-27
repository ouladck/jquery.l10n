var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './jquery.l10n.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'jquery.l10n.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};