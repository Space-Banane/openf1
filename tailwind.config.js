/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/*.css","./content/*.html","./content/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}

