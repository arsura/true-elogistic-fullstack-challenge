const hello         = require('../controller/hello');
const product       = require('../controller/product');
const user          = require('../controller/user');
const auth          = require('../controller/auth');
const requiredAuth  = require('../middleware/requiredAuth');

module.exports = function(app) {
  app.get('/api', hello.justOK);
  app.post('/api/auth', auth.login);
  app.post('/api/user', user.create);
  // app.get('/api/product/:id', requiredAuth, product.find);
  // app.get('/api/product', requiredAuth, product.findAll);
  // app.post('/api/product', requiredAuth, product.create);
  // app.put('/api/product', requiredAuth, product.update);
  // app.delete('/api/product/:id', requiredAuth, product.remove);
  app.get('/api/product/:id', product.find);
  app.get('/api/product', product.findAll);
  app.post('/api/product', product.create);
  app.put('/api/product', product.update);
  app.delete('/api/product/:id', product.remove);
};  