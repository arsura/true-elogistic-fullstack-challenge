const models = require('../models/index');

async function find(req, res) {
  const _id = req.params.id;
  const product = await models.Product.findOne({ where: { id: _id } });
  res.status(200).json({
    status: 200,
    data: product
  });
}

async function findAll(req, res) {
  const products = await models.Product.findAll({});
  res.status(200).json({
    status: 200,
    data: products
  });
}

async function create(req, res) {
  const product = req.body;
  try {
    await models.Product.create({
      name: product.name,
      price: product.price,
      description: product.description
    });
  } catch (e) {
    const _errors = e.errors[0];
    return res.status(400).json({
      status: 400,
      error: `${_errors.path} cannot be null`
    });
  }

  res.status(201).json({
    status: 201
  });
}

async function update(req, res) {
  const product = req.body;

  if (product.id === undefined) {
    return res.status(400).json({
      status: 400,
      error: 'id cannot be undefined'
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
      status: 400
    });
  }

  res.status(204).json({
    status: 204
  });
}

async function remove(req, res) {
  const _id = req.params.id;
  try {
    await models.Product.destroy({ where: { id: _id } });
  } catch (e) {
    return res.status(400).json({
      status: 400
    });
  }
  
  res.status(204).json({
    status: 204
  });
}

module.exports = {
  find,
  findAll,
  create,
  update,
  remove
};
