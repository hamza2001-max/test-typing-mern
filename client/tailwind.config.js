/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        custom: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
          fill: 'var(--color-fill)',
        }
      },
      backgroundColor: {
        custom: {
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
          fill: 'var(--color-fill)',
          fadedFill: 'var(--color-faded-fill)',
          fadedBlack: 'rgba(0,0,0,.75)'
        }
      },
      borderColor: {
        custom: {
          primary: 'var(--color-primary)',
          tertiary: 'var(--color-tertiary)',
        }
      },
      borderWidth: {
        '3': '3px'
      },
      height: {
        '22': '5.7rem',
        '30': '7.5rem',
      },
      width: {
        '0.1': '0.12rem',
        '98': '400px'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
    plugins: [
      plugin(function({ addVariant }) {
        addVariant('hocus', ['&:hover', '&:focus'])
      })
      // function ({ addVariant }) {
      //   addVariant('hocus', ({ modifySelectors, separator }) => {
      //     modifySelectors(({ className }) => {
      //       return `.${e(`hocus${separator}${className}`)}:hover, .${e(`hocus${separator}${className}`)}:focus`;
      //     });
      //   });
      // }
    ]
  }
}