/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF6EF",
        gold: "#C9A84C",
        "gold-lt": "#B8941F",
        maroon: "#7A1B2A",
        blush: "#9B2335",
        "text-mid": "#5A3028",
        espresso: "#2C1810",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        label: ['"Cinzel"', "serif"],
        body: ['"EB Garamond"', "Georgia", "serif"],
      },
      boxShadow: {
        luxury: "0 24px 70px rgba(44, 24, 16, 0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 900ms ease forwards",
        slowZoom: "slowZoom 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};
