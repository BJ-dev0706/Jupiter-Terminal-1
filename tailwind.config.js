/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Marker": "Marker"
      },
      backgroundColor: {
        "gradient": "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgb(210 49 249) 0%, rgb(44 237 170) 100%)"
      },
    },
  },
  plugins: [],
}

