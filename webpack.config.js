const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: { // add as an object
		polyfills: "./src/polyfills.ts", // add this
		main: "./src/app.ts", //change this
	},
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                  esModule: false,
                },
            },
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject : "body",
            scriptLoading: "blocking"
        })
    ],
	devtool: "source-map",
	devServer: {
		historyApiFallback: true
	}
};
