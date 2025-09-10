/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#4A90E2', // Blue for buttons/links
          secondary: '#F4A261', // Orange for accents
          dark: '#2A2A2A', // Darker shade for dark mode
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}