module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          default: "#0d1218",
          paper: "#1b2330",
        },
        primary: {
          main: "rgba(2, 106, 167, 1)",
          contrastText: "#fff",
        },
        secondary: {
          main: "rgba(78, 151, 194, 1)",
          contrastText: "#fff",
        },
        error: {
          main: "#f44336",
          contrastText: "#fff",
        },
        text: {
          primary: "#fff",
          secondary: "rgba(255, 255, 255, 0.7)",
          disabled: "rgba(255, 255, 255, 0.38)",
          hint: "rgba(255, 255, 255, 0.38)",
        },
      },
    },
  },
  plugins: [],
};
