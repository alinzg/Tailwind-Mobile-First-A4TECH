/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#ED9500",
        "orange-hover": ""
        "light-gray": "#F0F1F2",
        "gray-text": "#9A9EA6",
        "gray-secondary": "#9f9f9f",
      },
      fontFamily: {
        BYekan: ["BYekan", "sans-serif"],
      },
      fontSize: {
        "2xs": "12px",
        xs: "13px",
        sm: "14px",
        sbase: "15px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        "3xl": "24px",
      },
    },
  },
  plugins: [],
};
