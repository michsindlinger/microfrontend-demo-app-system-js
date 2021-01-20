const webpack = require("webpack")

module.exports = {
    entry: ["./src/set-public-path.js", "./src/index.js"],
    output: {
        libraryTarget: "system",
        filename: "index.js"
    },
    optimization: {
        moduleIds: "deterministic",
        minimize: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource"
            }
        ]
    }
}
