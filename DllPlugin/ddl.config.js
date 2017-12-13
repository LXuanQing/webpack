const webpack = require('webpack');
const path = require('path');
const vendors = [
    'react',
    'react-dom',
    'react-router',
    // ...其它库
];

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        library: '[name]',
    },
    entry: {
        vendor: ['react','react-dom'],
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, 'manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
    ],
};