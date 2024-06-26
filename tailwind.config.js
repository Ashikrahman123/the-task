module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}", "./index.html"],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        background_color: "#f6f9ff",
        black: { 900: "#000000", "900_11": "#00000011", "900_19": "#00000019" },
        blue: { a700: "#155dee" },
        blue_gray: {
          100: "#d5d5d5",
          700: "#475467",
          800: "#344053",
          900: "#2f2f2f",
          "700_01": "#475466",
          "700_28": "#464e6028",
        },
        cyan: { 400: "#34b7c9" },
        deep_purple: { 400: "#7e5d68", a400: "#6838ee" },
        gray: {
          50: "#f8f9fb",
          100: "#f5f1f1",
          200: "#e4e6eb",
          300: "#cfdddc",
          551: "#faf9ff",
          600: "#727272",
          700: "#636363",
          900: "#1f0128",
          20201: "#e8e8e8",
          "100_01": "#f3f6fc",
          "900_0c": "#1018280c",
        },
        green: { a700: "#23c46d" },
        indigo: { 0: "#edefcf", 400: "#5e5adb", "400_01": "#585cce", a100: "#8280ff" },
        light_green: { 500: "#91c02c" },
        pink: { 400: "#d25900" },
        purple: { 600: "#8d21c0" },
        red: {
          50:"#ffedef",
          600:"#e7412a",
          700:"#c23d45",
          "700_01":"#cc3a3a",
          "700_02":"#d1283d",
          "700_03":"#d92c20",
        },
        teal: { 400:"#289fb9" },
        white: { 0:"#ffffff", 1: "#fcfdff", a700: "#fdfeff" },
        black_600: "#656d76",
        gray_shadow: "#00000029",
      },
      boxShadow: {
        XS:"6px 6px 54px 0 #00000011",
        sm:"0 0 1px 1px #464e6028",
        md: "6px 6px 54px 0 #00000019",
        lg: "0 1px 2px 0 #1018280c",
        xl: "0 0 13px 5px #00000029",
      },
      fontFamily: {
        sourcesanspro: "Source Sans Pro",
        nunitosans: "Nunito Sans",
        opensans: "Open Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}