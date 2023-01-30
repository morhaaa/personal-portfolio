/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      extendedB: [" ExtendedBold", "sans-serif"],
      extended: [" ExtendedRegular", "sans-serif"],
      extend: {},
    },
    plugins: [],
  },
};
