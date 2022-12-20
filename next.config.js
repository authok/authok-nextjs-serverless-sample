const isProd = process.env.NODE_ENV === 'production'

console.log(process.version);
console.log('STATIC_URL: ', process.env.STATIC_URL);

module.exports = {
  env: {
    STATIC_URL: isProd ? process.env.STATIC_URL : '',
  },
  assetPrefix: isProd ? process.env.STATIC_URL : '',
  poweredByHeader: false
};
