module.exports = {
  development: {
    username: 'postgres',
    password: 'example',
    database: 'elogistic',
    host: 'true-elogistic-db',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: 'elogistic',
    host: 'true-elogistic-db',
    dialect: 'postgres'
  }
};
