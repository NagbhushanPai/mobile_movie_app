/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        light:{
          100: '#F5F8FA',
          200: '#E1E8ED',
          300: '#AAB8C2',
        },
        dark: {
          100: '#657786',
          200: '#AAB8C2',
          300: '#E1E8ED',
        },
      },
    },
  },
  plugins: [],
}