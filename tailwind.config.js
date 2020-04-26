const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    minHeight: {
      '300': '300px'
    },
    minWidth: {
      '300': '300px'
    }
  },
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar'
    })
  ],
}
