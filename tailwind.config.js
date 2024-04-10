/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      ralaway: ["Raleway", "sans-serif"],
    },
    extend: {
      boxShadow: {
        avatar:
          "0 0px 89px -14px rgba(0, 0, 0, 0.3), 0px 0px 47px -6px rgba(0, 0, 0, 0.3)",
      },
      transitionProperty: {
        mine: "font-color, background, opacity",
      },
      gridTemplateRows: {
        botContainer: "1fr 4rem",
      },
      gridTemplateColumns: {
        botForm: "1fr 3rem",
      },

      colors: {
        background: {
          l: "#F5F3F7",
          d: "#090E16",
        },
        icone: {
          l: "#9A73B5",
          d: "#FFFFFF",
        },
        main: {
          opaca: {
            l: "#61398F41",
            d: "#7A4AE241",
          },
          l: "#61398F",
          d: "#7b4ae2",
        },
        text: {
          l: "#4A4A4A",
          d: "#FFFFFF",
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "dots-loading" : ""
      },
      screens: {
        aboutMe: "940px",
        "300sx": "300px",
        "320sx": "320px",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar-hide"),
  ],
};
