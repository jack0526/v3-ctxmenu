const path = require('path')
const resolve = (dir) => {
    return path.resolve(__dirname, dir)
}
module.exports = {
    entry: resolve('index.js'),
    output: {
        path: resolve('dist'),
        filename: 'my-first-webpack.bundle.js'
    }
}
