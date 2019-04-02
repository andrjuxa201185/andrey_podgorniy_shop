const path = require('path');

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
            {  test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                } 
            } 
        ]
    },

    
};