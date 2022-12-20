const isProd = process.env.NODE_ENV === 'production'

console.log(process.version);
console.log('NODE_ENV: ', process.env.NODE_ENV, isProd);
console.log('STATIC_URL: ', process.env.STATIC_URL);
console.log('AUTHOK_SECRET: ', process.env.AUTHOK_SECRET);

module.exports = {
  env: {
    STATIC_URL: isProd ? process.env.STATIC_URL : '',
  },
  assetPrefix: isProd ? process.env.STATIC_URL : '',
  poweredByHeader: false
};
