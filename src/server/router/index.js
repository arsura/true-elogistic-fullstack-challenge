const product = require('../controller/product');
const hello = require('../controller/hello');

module.exports = function(app) {
  app.get('/api', hello.justTwoHundred);

  app.get('/api/product', product.getProducts);
  app.post('/api/product', product.createProduct);
};