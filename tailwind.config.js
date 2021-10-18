module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.tsx',
  ], // remove unused classes
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      tiny: '0.875rem',
      base: '1rem',
      lg: '1.6rem',
      xl: ['2.4rem', '2.7rem'],
      '2xl': '3.2rem',
    },
    fontFamily: {
      sans: ['Rubik', 'Helvetica Neue', 'sans-serif'],
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      Blue: 'hsl(246, 80%, 60%)',
      DarkBlue: 'hsl(235, 46%, 20%)',
      DesaturatedBlue: 'hsl(235, 45%, 61%)',
      LightOrange: 'hsl(15, 100%, 70%)',
      SoftBlue: 'hsl(195, 74%, 62%)',
      LightRed: 'hsl(348, 100%, 68%)',
      LimeGreen: 'hsl(145, 58%, 55%)',
      Violet: 'hsl(264, 64%, 52%)',
      SoftOrange: 'hsl(43, 84%, 65%)',
    }),
    extend: {
      width: {
        18: '4.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
