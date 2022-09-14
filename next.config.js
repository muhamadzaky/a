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
    COV_API_URL: 'https://covid19.kuningankab.go.id/api/',
    APP_MODE: (() => {
      if (isLocal) return 'local';
      if (isDev) return 'development';
      if (isStaging) return 'staging';
      if (isProd) return 'production';
    })(),
    AMPLITUDE_KEY: (() => {
      if (isLocal) return '34a9ce3db2e62b9e52728a8696e8eb69';
      if (isDev) return '34a9ce3db2e62b9e52728a8696e8eb69';
      if (isStaging) return '34a9ce3db2e62b9e52728a8696e8eb69';
      if (isProd) return '02d0a13a6f014b2f768b64a5ce6e3617';
    })()
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
