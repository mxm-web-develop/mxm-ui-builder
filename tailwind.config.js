module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      spacing: {
        pcWidth: "1200px",
        12.5: "50px",
        25: "100px",
        26.5: "106px",
        49: "196px",
        50: "200px",
        74: "296px",
        75: "300px",
        125: "500px",
        130: "520px",
      },
      minWidth: {
        pcWidth: "1200px",
      },
      maxWidth: {
        pcWidth: "1200px",
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
      backgroundImage: {
        linearGradient1: `linear-gradient(
          180deg,
          rgba(234, 245, 255, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        )`,
        linearGradient2: `linear-gradient(
          90deg,
          rgba(69, 71, 111, 1) 0%,
          rgba(103, 106, 171, 1) 100%
        )`,
        linearGradient3: `linear-gradient(
          312deg,
          rgba(144, 147, 236, 1) 0%,
          rgba(255, 255, 255, 1) 100%
        )`,
        linearGradient4: `linear-gradient(
          90deg,
          rgba(24, 204, 187, 1) 0%,
          rgba(3, 208, 188, 1) 100%
        )`,
      },
      boxShadow: {
        1: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        20: "20px",
        36: "36px",
      },
      colors: {
        mPurple: "#7b4ee5",
        mGray: "#c0c0c0",
        mGray2: "rgba(74, 74, 74, 1)",
        mGray3: "rgba(162, 157, 202, 1)",
        mGray4: "rgba(53, 53, 53, 1)",
        mLightBlue: "rgba(21, 203, 186, 1)",
      },
      fontFamily: {
        PingFangSC: ["PingFangSC-Regular"],
        PingFangSCLight: ["PingFangSC-Light"],
      },
    },
  },
  plugins: [],
};
