const hello   = require('../controller/hello');
const product = require('../controller/product');
const user    = require('../controller/user');
const auth    = require('../controller/auth');

module.exports = function(app) {
  app.get('/api', hello.justOK);
  app.get('/api/product/:id', product.find);
  app.get('/api/product', product.findAll);
  app.post('/api/product', product.create);
  app.put('/api/product', product.update);
  app.delete('/api/product/:id', product.remove);
  app.post('/api/user', user.create);
  app.post('/api/auth', auth.login);
};
