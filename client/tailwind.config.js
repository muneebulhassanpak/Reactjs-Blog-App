/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#025464",
        morange: "#E57C23",
        myellow: "#E8AA42",
        mwhite: "#F8F1F1",
        merror: "#FBFFDC",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        voll: ["Vollkorn", "serif"],
      },
      width: {
        formWidth: "32rem",
      },
    },
    plugins: [],
  },
};
