const models = require('../models/index');
const bcrypt = require('bcrypt');

/**
 * @param {Express.Request}   req
 * @param {Express.Response}  res
 * @param {string}            req.body.firstName
 * @param {string}            req.body.lastName
 * @param {string}            req.body.email
 * @param {string}            req.body.password
 */
async function create(req, res) {
  const user = req.body;
  try {
    const hash = await bcrypt.hash(user.password, 10);
    await models.User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: hash
    });
  } catch (e) {
    return res.status(400).json({
      status: 400,
      success: false,
      error: e
    });
  }

  res.status(201).json({
    status: 200,
    success: true,
    data: user
  });
}

module.exports = {
  create
};