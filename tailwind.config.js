/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "2560px",
    },
    colors: {
      "dark-blue": "#003459",
      "darkblue-light": "#0078CD",
      "darkblue-mid": "#00528C",
      "darkblue-strong": "#002A48",
      "caramel-yellow": "#F7DBA7",
      "caramel-light": "#FCEED5",
      "caramel-mid": "#F1D092",
      "caramel-strong": "#EEC77E",
      "pink-red": "#FF564F",
      "green-leaf": "#34C759",
      "pongkan-mid": "#FFB775",
      "pongkan-orange": "#ff912C",
      "blue-sea": "#00A7E7",
    },
    extend: {},
  },
  plugins: [],
};
