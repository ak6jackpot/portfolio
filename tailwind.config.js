module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: "#ffffff",
        deep_orange: "#f5ab67",
        lime: "#a1a325",
        yellow: "#fffccc",
        pink: "#c63973",
        black: "#000000",
        light_blue: "#2dc3f2",
        deep_purple: "#3d349d",
        indigo: "#20398d",
        orange: "#ffb039",
        blue: "#e5eeff",
        gray: {
          100: "#f6f6f6",
          200: "#eaeaea",
          400: "#b6b6b6",
          600: "#6c6c6c",
          700: "#595959",
          800: "#3c3c3c",
          "800_01": "#3a3a3a",
          "400_01": "#b1b1b1",
        },
        red: {
          50: "#ffecec",
          300: "#f56767",
          "400_01": "#e05d5d",
          A200: "#ff3c53",
        },
        cyan: { 50: "#ccfaf5", 400: "#38b5c6" },
        green: { 600: "#27a953", A100: "#ccffd7" },
      },
      boxShadow: {
        xs: "0px 50px  50px 0px #0000000c",
        sm: "0px 30px  50px 0px #f567677c",
        md: "0px 30px  50px 0px #38b5c687",
        lg: "0px 30px  50px 0px #a5a82087",
        xl: "0px 30px  90px 0px #00000019",
        "2xl": "0px 40px  200px 0px #00000014",
        "3xl": "10px 20px  50px 0px #27a95363",
      },
      fontFamily: {
        sourcesanspro: "Source Sans Pro",
        nunito: "Nunito",
        plusJakartaSans: "PlusJakartaSans",
        rubik: "Rubik",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ffb039,#ffb03900)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
