module.exports =
  process.env.NODE_ENV === 'production'
    ? require('./configure.prod')
    : require('./configure.dev');
