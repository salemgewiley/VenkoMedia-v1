const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      main: "rgb(15 23 42)",
      "secondary-back": "#1e293b",
      "main-text": "#f0f9ff",
      "secondary-text": "#0ea5e9",
      "main-hover": "#38bdf8",
    },
    extend: {
      fontFamily: {
        expoBold: ["ExpoBold", "sans-serif"],
        expoBook: ["ExpoBook", "sans-serif"],
      },
    },
  },
  plugins: [],
});
