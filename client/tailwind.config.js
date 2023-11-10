/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js, ts, jsx, tsx}",
    "./src/pages/**/*.{js, ts, jsx, tsx}",
    "./src/utils/**/*.{js, ts, jsx, tsx}",
    "./src/assets/**/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
  plugins: [],
}
