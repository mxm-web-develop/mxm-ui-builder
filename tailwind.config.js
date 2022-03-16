module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],

  theme: {
    container: {
      padding: {
        DEFAULT: "4rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "slg-green": "#354E57",
        "slg-dark": "#2E2E22",
        "slg-red": "#DD2E41",
        "slg-bright": "#FAFAFA",
        "slg-light-green": "#E4ECEF",
        "slg-light-gray": "#EEF2F4",
      },
      spacing: {
        boxH: "30rem",
      },
    },
  },
  plugins: [],
};
