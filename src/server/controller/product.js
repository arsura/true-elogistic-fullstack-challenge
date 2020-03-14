function getProducts(req, res) {
  res.status(200).json({
    status: 200,
    health: 'OK'
  });
}

function createProduct(req, res) {
  res.status(201).json({
    status: 201,
    data: {}
  });
}

module.exports = {
  getProducts,
  createProduct
};