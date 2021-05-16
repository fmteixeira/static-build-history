module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#179ed3",
    }),
    boxShadow: {
      thick: "0 0 5px 0 #222",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
