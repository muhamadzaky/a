const path = require('path');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const locales = ['en-US', 'ja', 'id'];

module.exports = (phase) => {
  const isLocal = phase === PHASE_DEVELOPMENT_SERVER;
  const isDev = phase === PHASE_PRODUCTION_BUILD && process.env.APP_MODE === 'development';
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.APP_MODE === 'staging';
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.APP_MODE === 'production';

  console.log(`isLocal: ${isLocal} - isDev:${isDev} - isProd:${isProd} - isStaging:${isStaging}`);

  const env = {
    API_URL: 'https://private-898d79-api925.apiary-mock.com/',
    COV_API_URL: 'https://covid19.kuningankab.go.id/api/'
  };

  return {
    env,
    i18n: {
      locales,
      defaultLocale: locales[0],
      localeDetection: true
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    },
    reactStrictMode: true
  };
};
