/* eslint-disable global-require */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '414px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'Inter Fallback', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        base: [defaultTheme.fontSize.base[0], defaultTheme.lineHeight.normal],
        lg: [defaultTheme.fontSize.lg[0], defaultTheme.lineHeight.relaxed],
        xl: [defaultTheme.fontSize.xl[0], defaultTheme.lineHeight.snug],
        '2xl': [defaultTheme.fontSize['2xl'][0], defaultTheme.lineHeight.snug],
        '4xl': [defaultTheme.fontSize['4xl'][0], defaultTheme.lineHeight.tight],
        '5xl': [defaultTheme.fontSize['5xl'][0], defaultTheme.lineHeight.tight],
        15: 15,
        16: 16,
        22: 22,
        44: 44,
        52: 52,
      },
      colors: {
        white: '#ffffff',
        black: '#141A1F',
        primary: {
          1: '#0073E6',
          2: '#0A53A5',
        },
        gray: {
          1: '#6C7993',
          2: '#A7B1BE',
          3: '#E0E5EB',
          4: '#F6F7F8',
          5: '#D1D7E0',
          6: '#F0F2F4',
          7: '#34373B',
          94: '#EEEFF1',
        },
        hover: {
          1: '#3399FF',
        },
        additional: {
          1: '#EB4748',
          2: '#EBF5FF',
          3: '#00877C',
          4: '#D6EBFF',
          5: '#FFFAEB',
          6: '#97C639',

          blue: '#0A61C2',
          green: '#007A70',
          red: '#C43131',
          purple: '#795AA5',
          orange: '#F17423',
          'light-green': '#EFFBFA',
        },
      },
      boxShadow: {
        primary: '0px 5px 20px rgba(0, 0, 0, 0.09)',
        secondary: '0px 10px 20px rgba(0, 0, 0, 0.09)',
        tertiary: '0px 5px 20px rgba(0, 0, 0, 0.1)',
        card: '0px 2px 10px rgba(20, 26, 31, 0.15)',
        input: '0px 1px 8px rgba(20, 26, 31, 0.2)',
      },
      borderRadius: {
        large: '20px',
      },
      backgroundImage: {
        'dark-blue': 'linear-gradient(247.62deg, #272B41 21.37%, #161928 52.43%)',
        eu: "url('/images/eu.svg')",
        usa: "url('/images/usa.svg')",
        'search-icon': "url('/images/search.svg')",
        loader: "url('/images/loader.svg')",
        grid: "url('/images/grid.svg')",
        '404-page-pattern': "url('/images/404-page-pattern.svg')",
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
        // Add dark mode styles
        invert: {
          css: {
            '--tw-prose-body': theme('colors.gray.300'),
            '--tw-prose-headings': theme('colors.white'),
            '--tw-prose-lead': theme('colors.gray.300'),
            '--tw-prose-links': theme('colors.primary.1'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.gray.400'),
            '--tw-prose-bullets': theme('colors.gray.600'),
            '--tw-prose-hr': theme('colors.gray.700'),
            '--tw-prose-quotes': theme('colors.gray.100'),
            '--tw-prose-quote-borders': theme('colors.gray.700'),
            '--tw-prose-captions': theme('colors.gray.400'),
            '--tw-prose-code': theme('colors.white'),
            '--tw-prose-pre-code': theme('colors.gray.300'),
            '--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-th-borders': theme('colors.gray.600'),
            '--tw-prose-td-borders': theme('colors.gray.700'),
            '--tw-prose-invert-body': theme('colors.gray.200'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.gray.300'),
            '--tw-prose-invert-links': theme('colors.primary.1'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.gray.400'),
            '--tw-prose-invert-bullets': theme('colors.gray.600'),
            '--tw-prose-invert-hr': theme('colors.gray.700'),
            '--tw-prose-invert-quotes': theme('colors.gray.100'),
            '--tw-prose-invert-quote-borders': theme('colors.gray.700'),
            '--tw-prose-invert-captions': theme('colors.gray.400'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.gray.300'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.gray.600'),
            '--tw-prose-invert-td-borders': theme('colors.gray.700'),

            // Explicit heading colors for dark mode
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            h5: {
              color: theme('colors.white'),
            },
            h6: {
              color: theme('colors.white'),
            },
            p: {
              color: theme('colors.gray.300'),
            },
            strong: {
              color: theme('colors.white'),
            },
            ul: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.gray.600'),
                },
              },
            },
            ol: {
              li: {
                '&:before': {
                  color: theme('colors.gray.400'),
                },
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
  plugins: [require('@tailwindcss/typography')],
};
