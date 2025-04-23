/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'background-dark': 'var(--background-dark)',
        'background-light': 'var(--background-light)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)'
      },
      fontFamily: {
        'preahvihear': ['Preahvihear', 'sans-serif'],
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}