const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      small: "0.8rem", // Adjust the value as per your requirements
    },
    extend: {
      colors: {
        "262B3A": "#262B3A",
        "custom-green": "#86DAA2",
      },
    },
  },
  plugins: [],
};
