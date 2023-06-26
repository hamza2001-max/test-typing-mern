/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      fontSize: {
        'custom-xl': '1.7rem'
      },
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
        '98': '400px',
        '99': '500px',
        '100': '600px',
        '101': '800px',
        '102': '1000px'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    }
  }
}