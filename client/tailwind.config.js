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
          fill: 'var(--color-fill)',
        }
      },
      backgroundColor: {
        custom: {
          fill: 'var(--color-fill)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          tertiary: 'var(--color-tertiary)',
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
        '22': '5.7rem'
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
}