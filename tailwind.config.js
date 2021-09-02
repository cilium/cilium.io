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
        },
        gray: {
          1: '#6C7993',
          2: '#A7B1BE',
          3: '#E0E5EB',
          4: '#F6F7F8',
        },
        hover: {
          1: '#3399FF',
          2: '#7A3DF5',
        },
      },
      spacing: {
        17: '4.375rem', // 70px
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
