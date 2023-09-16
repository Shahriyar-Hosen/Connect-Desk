/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#026848",
        secondary: "#cd6b2e",
        accent: "#54D487",
        neutral: "#000000",
        "base-100": "#cbe0da",
        "base-200": "#fbf5f3",
        info: "#3abff8",
        success: "#36d399",
        warning: "#fbbd23",
        error: "#ff0000",
      },
      fontFamily: {
        Poppins: "Poppins",
        Exo: "Exo",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [],
};
