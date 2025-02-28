module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        diagonal: "diagonalMove 3s linear infinite",
      },
      keyframes: {
        diagonalMove: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(100vw, 100vh)" },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
