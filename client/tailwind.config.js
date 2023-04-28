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
        }
      }
    },
  },
  plugins: [],
}

// --color-text-primary: #000;
// --color-text-secondary: #ff0000;
// --color-fill-primary: #fff;
// --color-fill-secondary: #b7b7b7;