/** @type {import('tailwindcss').Config} */
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
        }
      },
      backgroundColor: {
        custom: {
          fill: 'var(--color-fill)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
        }
      },
      borderColor:{
        custom: {
          primary: 'var(--color-primary)'
        }
      },
      width: {
          '98': '400px'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        '.tailUnderline': {
          'textDecoration': 'underline',
          'text-decoration-color': 'var(--color-tertiary)',
        },
      }
      addUtilities(extendUnderline)
    }
  ]
}
