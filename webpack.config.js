const path = require('node:path')

/** @type {import('webpack').Configuration} */
const config = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js',
  },
}

module.exports = config
