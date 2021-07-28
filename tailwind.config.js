const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    'src/**/*.tsx'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [ 'Noto Sans', 'sans-serif' ]
    },
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          50: '#fbfbfb',
        }
      }
    }
  },
  plugins: [],
}
