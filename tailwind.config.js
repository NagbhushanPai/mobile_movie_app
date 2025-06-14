/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  presets: [
    require("./nativewindcss/preset"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

