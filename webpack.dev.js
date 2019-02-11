const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
mode: 'development',
devtool: 'inline-source-map',
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: 'devserver',
            port: 3001,
            proxy : 'http://devserver:3000'
        })
    ]
});
