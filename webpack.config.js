const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    watch: true,
    entry: {
        app: "./src/Index.tsx"
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

            // {
            //     test: /\.css$/,
            //     include: [
            //         path.resolve(__dirname, "src")
            //     ],
            //     loaders: [
            //         "style-loader",
            //         "typings-for-css-modules-loader?modules&namedExport"
            //     ]
            // },

            {
                test: /\.css$/i,
                exclude: [/node_modules/],
                include: [
                    path.resolve(__dirname, "src")                    
                ],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: true,
                            camelCase: true,
                            localIdentName: '[name]_[local]_[hash:base64:5]',
                            minimize: false,
                            namedExport: true
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => ([
                                require("postcss-import")(),
                                // Following CSS Nesting Module Level 3: http://tabatkins.github.io/specs/css-nesting/
                                require("postcss-nesting")(),
                                require("postcss-custom-properties")(),
                                //https://github.com/ai/browserslist
                                require("autoprefixer")({
                                    browsers: ['last 2 versions', 'ie >= 9']
                                })
                            ])
                        }
                    }
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
        new webpack.WatchIgnorePlugin([
            /css\.d\.ts$/
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
}
