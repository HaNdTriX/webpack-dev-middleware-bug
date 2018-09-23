const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const compiler = webpack({
  mode: 'development',
  entry: './src/index.js'
});
const express = require('express');
const app = express();

app.use(middleware(compiler, {
  // webpack-dev-middleware options
}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

(async () => {
  throw new Error('This error should end the process or at least show an unhandled rejection warning')
})();

new Promise((resolve, reject) => {
  reject(new Error('This error should also end the process or at least show an unhandled rejection warning'))
})

// Instead the 2 errors above are logged when the server stopps
// More info: https://github.com/sindresorhus/loud-rejection
