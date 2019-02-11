const path                      = require('path');
const MiniCssExtractPlugin      = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin   = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin         = require('html-webpack-plugin')
const CleanWebpackPlugin        = require('clean-webpack-plugin');


module.exports = {
    entry   : [ './public/src/javascripts/main.js', './public/src/stylesheets/scss/styles.scss' ],
    output  : {
        filename    : 'main-bundle.js',
        path        : path.resolve('public/dist')
    },
    plugins : [
        new CleanWebpackPlugin(['public/dist']),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "main-bundle.css"
        }),
        new OptimizeCSSAssetsPlugin({}),
        
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename    : 'bundle-html.ejs',
            template    : 'public/src/index.html',
            meta        : {
                'viewport' : 'width=device-width, initial-scale=1, shrink-to-fit=no',
            },
            favicon : ''
        })
    ],
    module : {
        rules : [
            {
                test : /\.(sa|sc|c)ss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    }
};
