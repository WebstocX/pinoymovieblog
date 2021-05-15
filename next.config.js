const withPWA = require('next-pwa')
module.exports = withPWA({
    future: {
      webpack5: true,
    },
    images: {
      domains: ['https://source.unsplash.com'],
    },
  })