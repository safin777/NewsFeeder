/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],

  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem',
      },
    },
  },
  plugins: [],
}
