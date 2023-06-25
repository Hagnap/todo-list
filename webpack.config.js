const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    content: './src/contentTabs.js',
    task: './src/task.js',
    project: './src/project.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "development"
};