
module.exports = process.env.TSE_COV
  ? require('./lib-cov/tse')
  : require('./lib/tse');
