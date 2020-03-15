const product = require('../controller/product');
const hello = require('../controller/hello');

module.exports = function(app) {
  app.get('/api', hello.justOK);

  app.get('/api/product/:id', product.find);
  app.get('/api/product', product.findAll);
  app.post('/api/product', product.create);
  app.put('/api/product', product.update);
  app.delete('/api/product/:id', product.remove);
};
