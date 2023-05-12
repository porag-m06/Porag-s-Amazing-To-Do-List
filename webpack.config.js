const myPath = require('path'); //Having the path module to set path for entry & output if we want outside default
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Plugin to automatically create the index.html file in the /dist directory.
const { template } = require('lodash');

module.exports = {

    //webpack mode, entry and output config:
    mode: 'development',
    entry: {
        mymain: myPath.resolve(__dirname,'src/index.js')},
    output: {
        path: myPath.resolve(__dirname,'dist'),
        filename:'[name].bundle.js',
        clean:true
    },

    //webpack css loaders (style-loder, css-loader) config:
    module:{
        rules:[
            {
                test: /\.css$/i,
                use:['style-loader','css-loader'],
            }
        ],
    },

    //webpack Html plugin for auto generating HTML under dist
    plugins: [
        new HtmlWebpackPlugin ({
            template : './src/index.html'
        }),
    ],

    


}
