/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/views/**/*.vue', // Matches all Vue files in src/views and any subdirectories
    './src/views/modules/**/*.vue', // Matches all Vue files in src/views/modules and any subdirectories
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'var(--color-border)'
      }
    },
  },
  plugins: [],
}

