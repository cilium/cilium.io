/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
        tertiary: '0px 5px 20px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        large: '20px',
      },
      backgroundImage: {
        'search-icon': "url('/images/search.svg')",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            h1: {
              color: theme('colors.black'),
              fontSize: theme('fontSize.3xl[0]'),
              lineHeight: theme('lineHeight.tight'),
            },
            h2: {
              color: theme('colors.black'),
            },
            h3: {
              color: theme('colors.black'),
            },
            h4: {
              color: theme('colors.black'),
            },
            h5: {
              color: theme('colors.black'),
            },
            h6: {
              color: theme('colors.black'),
            },
            ul: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.black'),
                },
              },
            },
            ol: {
              li: {
                '&:before': {
                  color: theme('colors.black'),
                },
              },
            },
            a: {
              color: theme('colors.primary.1'),
              textDecoration: 'none',
              transitionDuration: theme('transitionDuration.200'),
              transitionProperty: theme('transitionProperty.colors'),
              transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
            },
            'a:hover': {
              color: theme('colors.gray.1'),
            },
            p: {
              lineHeight: theme('lineHeight.normal'),
            },
            code: {
              fontWeight: theme('fontWeight.normal'),
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
            },
          },
        },
        lg: {
          css: {
            h1: {
              fontSize: theme('fontSize.4xl[0]'),
              lineHeight: theme('lineHeight.tight'),
            },
            p: {
              lineHeight: theme('lineHeight.normal'),
            },
            code: {
              '&::before': {
                content: '"" !important',
              },
              '&::after': {
                content: '"" !important',
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/line-clamp')],
};
