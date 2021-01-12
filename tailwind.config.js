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
      primary: "#ffca28",
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
