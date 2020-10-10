const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        cormorant: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.serif],
      },
      width: {
        '15ch': '15ch',
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.black.lighter'),
        },
      },
    }),
    maxHeight: {
      ...defaultTheme.maxHeight,
      xl: '900px',
      xs: '500px',
      sm: '650px',
      lg: '750px',
    },
    minHeight: {
      ...defaultTheme.minHeight,
      xs: '150px',
    },
    fontSize: {
      ...defaultTheme.fontSize,
      '7xl': '6.5rem',
    },
    colors: {
      black: {
        dark: '#000',
        lighter: '#181818',
      },
      white: {
        light: '#FFF',
        lighter: '#fcfcfc',
        gray: '#f9f9f9',
        dark: '#b2b2b2',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui'), require('@tailwindcss/typography')],
};
