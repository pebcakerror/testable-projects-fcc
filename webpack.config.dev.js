
module.exports = {
    entry: "./src/index.js",
    output: {
        library: 'FCC_Global',
        path: __dirname + '/local_test/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { 
                test: /\.css$/, 
                loader: "style!css" 
            }         
        ]
    }
};