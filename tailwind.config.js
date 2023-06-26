const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      small: "0.8rem", // Adjust the value as per your requirements
    },
    extend: {
      screens: {
        tablet: { min: "768", max: "1200px" }, // Set minimum width to 1150px
        ...defaultTheme.screens,
      },
      colors: {
        "262B3A": "#262B3A",
        "custom-green": "#86DAA2",
      },
    },
  },
  plugins: [],
};
