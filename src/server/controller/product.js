const models = require('../models/index');

/**
 * @param {Express.Request}   req
 * @param {Express.Response}  res
 * @param {number}            req.params.id - product id
 */
async function find(req, res) {
  const _id = req.params.id;
  const product = await models.Product.findOne({ where: { id: _id } });
  res.status(200).json({
    status: 200,
    success: true,
    data: product
  });
}

/**
 * @param {Express.Request}   req
 * @param {Express.Response}  res
 */
async function findAll(req, res) {
  const products = await models.Product.findAll({});
  res.status(200).json({
    status: 200,
    success: true,
    data: products
  });
}

/**
 * @param {Express.Request}   req
 * @param {Express.Response}  res
 * @param {string}            req.body.name         - product name
 * @param {number}            req.body.price        - product price
 * @param {string}            req.body.description  - product description
 */
async function create(req, res) {
  const product = req.body;
  try {
    await models.Product.create({
      name: product.name,
      price: product.price,
      description: product.description
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      success: false,
      error: e
    });
  }

  res.status(201).json({
    status: 201,
    success: true
  });
}

/**
 * @param {Express.Request}   req
 * @param {Express.Response}  res
 * @param {number}            req.body.id           - product id
 * @param {string}            req.body.name         - product name
 * @param {number}            req.body.price        - product price
 * @param {string}            req.body.description  - product description
 */
async function update(req, res) {
  const product = req.body;

  if (product.id === undefined) {
    return res.status(400).json({
      status: 400,
      success: false,
      message: 'id cannot be undefined'
    });
  }

  try {
    await models.Product.update(
      {
        name: product.name,
        price: product.price,
        description: product.description
      },
      { where: { id: product.id } }
    );
  } catch (e) {
    return res.status(400).json({
      status: 400,
      success: false
    });
  }

  res.status(204).json({
    status: 204,
    success: true
  });
}

/**
 * @param {Express.Request}   req
 * @param {Express.Response}  res
 * @param {number}            req.params.id - product id
 */
async function remove(req, res) {
  const _id = req.params.id;
  try {
    await models.Product.destroy({ where: { id: _id } });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      success: false
    });
  }

  res.status(204).json({
    status: 204,
    success: true
  });
}

module.exports = {
  find,
  findAll,
  create,
  update,
  remove
};