/** @type {import('tailwindcss').Config} */
// @ts-ignore

import daisyui from 'daisyui';
module.exports = {
  content: ["./src/**/*.{js,jsx}"], // assuming you're not using TS
  theme: {
    extend: {},
  },
  plugins: [daisyui], // ✅ fixed
}
