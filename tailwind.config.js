const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        DEFAULT: "#8bc34a",
        900: "#33691e",
        800: "#558b2f",
        700: "#689f38",
        600: "#7cb342",
        500: "#8bc34a",
        400: "#9ccc65",
        300: "#aed581",
        200: "#c5e1a5",
        100: "#dcedc8",
        50: "#f1f8e9",
      },
      secondary: "#ffab91",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
};
