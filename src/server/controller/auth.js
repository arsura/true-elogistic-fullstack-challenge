const models  = require('../models/index');
const config  = require('../config');
const bcrypt  = require('bcrypt');
const jwt     = require('jsonwebtoken');

/**
 * @param {Express.Request}   req
 * @param {Express.Response}  res
 * @param {string}            req.body.username - username = email
 * @param {string}            req.body.password
 */
async function login(req, res) {
  const { username, password } = req.body;

  if (username === undefined || password === undefined) {
    return res.status(401).json({
      status: 401,
      success: false
    });
  }

  const user = await models.User.findOne({ where: { email: username } });

  if (user === null) {
    return res.status(401).json({
      status: 401,
      success: false,
      message: 'incorrect username or password'
    });
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (isMatched) {
    const token = jwt.sign(
      {
        email: username
      },
      config.jwt.privateKey,
      {
        algorithm: config.jwt.algorithm,
        expiresIn: config.jwt.expiresIn
      }
    );
    return res.status(200).json({
      status: 200,
      success: true,
      token: token
    });
  } else {
    return res.status(401).json({
      status: 401,
      success: false,
      message: 'incorrect username or password'
    });
  }
}

module.exports = { login };