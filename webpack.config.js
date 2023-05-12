const myOutPath = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename:'[name].bundle.js',
        path: myOutPath.resolve(__dirname,'dist'),
        clean:true
    }
}
