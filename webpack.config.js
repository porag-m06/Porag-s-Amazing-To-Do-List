const myPath = require('path'); //Having the path module to set path for entry & output if we want outside default

module.exports = {
    mode: 'development',
    entry: {
        mymain: myPath.resolve(__dirname,'src/index.js')},
    output: {
        path: myPath.resolve(__dirname,'dist'),
        filename:'[name].bundle.js',
        clean:true
    }
}
