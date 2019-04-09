const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const args = require('yargs').argv;

console.log(args);

const package = require('./package');
const isProduction = process.env.NODE_ENV === 'production';
const isStylesExternal = args.env && args.env.styles;

const plugins = [
    new HTMLPlugin({
        title: package.name,
        template: './index.html',
        version: package.version,
    }),

    new webpack.HotModuleReplacementPlugin()
];

if (isStylesExternal) {
    plugins.push(new CssPlugin({ filename: 'main.css'}))
}

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname, 'src'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'prod')
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['syntax-dynamic-import']
                    }
                } 
            },
            {
                test: /\.s?css$/,
                use: [
                    isStylesExternal ? CssPlugin.loader : 'style-loader',
                    // {
                    //     loader: 'style-loader',
                    //     options: { attrs: {id: 'testme'}, singleton: true }
                    // },
                    // CssPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins,

    optimization: {
        splitChunks: {
          chunks: 'all'
        },
    },

    devtool: isProduction ? undefined : 'source-map',

    devServer: { 
        contentBase: path.resolve(__dirname, 'prod'),
        publicPath: '/',
        port: 9000,
        hot: true
    }
};