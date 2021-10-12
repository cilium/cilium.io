/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: [defaultTheme.fontSize.base[0], defaultTheme.lineHeight.normal],
        lg: [defaultTheme.fontSize.lg[0], defaultTheme.lineHeight.relaxed],
        xl: [defaultTheme.fontSize.xl[0], defaultTheme.lineHeight.snug],
        '2xl': [defaultTheme.fontSize['2xl'][0], defaultTheme.lineHeight.snug],
        '4xl': [defaultTheme.fontSize['4xl'][0], defaultTheme.lineHeight.tight],
        '5xl': [defaultTheme.fontSize['5xl'][0], defaultTheme.lineHeight.tight],
      },
      colors: {
        white: '#ffffff',
        black: '#141A1F',
        primary: {
          1: '#0080FF',
          2: '#0A53A5',
        },
        gray: {
          1: '#6C7993',
          2: '#A7B1BE',
          3: '#E0E5EB',
          4: '#F6F7F8',
          5: '#D1D7E0',
        },
        hover: {
          1: '#3399FF',
        },
        additional: {
          4: '#D6EBFF',
        },
      },
      boxShadow: {
        primary: '0px 5px 20px rgba(0, 0, 0, 0.09)',
        secondary: '0px 10px 20px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
