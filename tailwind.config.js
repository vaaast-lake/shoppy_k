/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/public/image/cutted-banner2.png')",
      }
    },
  },
  plugins: [],
}
