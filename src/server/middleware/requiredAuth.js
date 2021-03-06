const config  = require('../config');
const jwt     = require('jsonwebtoken');

module.exports = function(req, res, next) {
  let authorizationHeader = req.headers['authorization'];
  let token;

  if (authorizationHeader) {
    authorizationHeader = authorizationHeader.split(' ');
  } else {
    return res.status(401).json({
      status: 401,
      success: false
    });
  }

  if (authorizationHeader[0] === 'Bearer' && authorizationHeader[1]) {
    token = authorizationHeader[1];
  }

  if (token) {
    try {
      const decoded = jwt.verify(token, config.jwt.publicKey, { algorithms: [config.jwt.algorithm] });
      req.user = decoded;
      next();
    } catch (e) {
      return res.status(401).json({
        status: 401,
        success: false
      });
    }
  } else {
    return res.status(401).json({
      status: 401,
      success: false
    });
  }
};
