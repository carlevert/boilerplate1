const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    watch: true,
    entry: {
        app: "./src/index.tsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["es2015"]
                },
            },

            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loader: "ts-loader"
            },

            {
                test: /\.css$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loaders: [
                    "style-loader",
                    "typings-for-css-modules-loader?modules&namedExport"
                ]
            }

        ],

    },

    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"],
    },

    devtool: "source-map", // enum

    context: __dirname, // string (absolute path!)
    // the home directory for webpack
    // the entry and module.rules.loader option
    // is resolved relative to this directory

    devServer: {
        proxy: { // proxy URLs to backend development server
            '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, 'static'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false,  // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
          }),
        new webpack.HotModuleReplacementPlugin()
    ],
}
