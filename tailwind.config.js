const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    }
  },
  theme : {
    extend: {
      width: {
        'mobile-sm': '92px',
        'mobile-md': '201px',
        'tablet-sm': '225px',
        'tablet-md': '467px',
        'desktop-sm': '275px',
        'desktop-md': '566px',
      },
      height: {
        'mobile-sm': '123px',
        'mobile-md': '268px',
        'mobile-lg': '332px',
        'tablet-sm': '300px',
        'tablet-md': '622px',
        'tablet-lg': '775px',
        'desktop-sm': '367px',
        'desktop-md': '755px',
        'desktop-lg': '941px',
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    })
  ],
}
