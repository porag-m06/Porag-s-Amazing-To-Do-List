const myOutPath = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'[name].bundle.js',
        path: myOutPath.resolve(__dirname,'dist'),
        clean:true
    }
}
