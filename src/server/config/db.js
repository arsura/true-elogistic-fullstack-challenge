module.exports = {
  development: {
    username: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'secret',
    database: process.env.DB_NAME || 'elogistic',
    host: process.env.DB_HOST || 'true-elogistic-db',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: 'admin',
    password: 'secret',
    database: 'elogistic',
    host: 'true-elogistic-db',
    dialect: 'postgres'
  }
};