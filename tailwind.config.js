/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        white: '#ffffff',
        black: '#141A1F',
        primary: {
          1: '#0080FF',
        },
        gray: {
          1: '#F6F7F8',
          2: '#F0F2F4',
          3: '#E0E5EB',
          4: '#A7B1BE',
          5: '#6C7993',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
