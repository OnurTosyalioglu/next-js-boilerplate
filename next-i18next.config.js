const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
  },
	localePath: path.resolve('./locale'),
  ns: ['common', 'auth', 'index', 'main',], 
};
