/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/views/**/*.vue', // Matches all Vue files in src/views and any subdirectories
    './src/views/modules/**/*.vue', // Matches all Vue files in src/views/modules and any subdirectories
  ],
  darkMode: true,
  theme: {
    extend: {},
  },
  plugins: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}

