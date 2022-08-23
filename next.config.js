const { i18n } = require('./next-i18next.config')
const withPwa = require('next-pwa')
const { pwa } = require('./next-pwa.config')

module.exports = withPwa({
  i18n,
	pwa,
  output: 'standalone',
	experimental: {
    images: {
      allowFutureImage: true,
    },
  },
})

