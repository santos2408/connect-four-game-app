/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-purple-1": "#7A45FF",
        "brand-purple-2": "#5C2CD5",
        "brand-red-1": "#FF6687",
        "brand-yellow-1": "#FFCE69",
      },
    },
  },
  plugins: [],
};
