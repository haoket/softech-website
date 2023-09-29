const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: false,
  optimizeFonts: false,
  // i18n: {
  //   locales: ['en', 'ar'],
  //   defaultLocale: 'en',
  // },
  images: {
    domains: ['office.softech.vn', 'aptech-danang.edu.vn'],
    formats: ['image/avif', 'image/webp'],
  },
};
