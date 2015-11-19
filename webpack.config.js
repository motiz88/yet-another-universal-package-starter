var path = require('path');

var webpack = require('webpack');

var port = 3078;

// webpack.config.js
module.exports = {
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(bower_components|node_modules)/,
            loaders: ['babel']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    entry: {
        demo: [
            'webpack-dev-server/client?http://0.0.0.0:' + port, // WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            './demo' // Your appʼs entry point
        ]
    },
    output: {
        // Make sure to use [name] or [id] in output.filename
        //  when using multiple entry points
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "demo/assets"),
        port: port,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
