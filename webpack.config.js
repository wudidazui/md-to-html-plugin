const { resolve } = require('path')
const MdToHtmlPlugin = require('./plugins/md-to-html-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: resolve(__dirname, 'build')
  },
  plugins:[
    new MdToHtmlPlugin({
      template:resolve(__dirname,'test.md'),
      filename:'test.html'
    })
  ],
  mode: 'development'
}
