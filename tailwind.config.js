/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ece8e1",
      red: "#ff4655",
      black: "#000000",
      grey: "#292929",
      blue: "#0f1923",
    },
    fontFamily: {
      serif: ["Ubuntu"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        error:
          "url(https://www.freestyle.abbott/za-en/errors/404/_jcr_content/root/container_1688562517/errorpage.coreimg.png/1627919005948/error-404.png)",
      },
    },
  },
  plugins: [],
};
