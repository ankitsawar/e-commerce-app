/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant-garamond': ['"Cormorant Garamond", serif'],
        'poppins': ['"Poppins", sans-serif']
      }
    },
  },
  plugins: [],
}

