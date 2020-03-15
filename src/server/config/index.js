const fs = require('fs');

function getSecret(secret) {
  /* 
    Get secret from somewhere
    e.g. Docker secret
    But in this project we will return secret from secret folder
  */
  if (secret === 'PUBLIC_KEY') {
    return fs.readFileSync('./secret/RSA256Secret.key.pub', 'utf8');
  }
  else if (secret === 'PRIVATE_KEY') {
    return fs.readFileSync('./secret/RSA256Secret.key', 'utf8');
  }
}

module.exports = {
  jwt: {
    expiresIn: '7d',
    algorithm: 'RS256',
    publicKey: getSecret('PUBLIC_KEY') || fs.readFileSync('./secret/RSA256Secret.key.pub', 'utf8'),
    privateKey: getSecret('PRIVATE_KEY') || fs.readFileSync('./secret/RSA256Secret.key', 'utf8')
  }
};
