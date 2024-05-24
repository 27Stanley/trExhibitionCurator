/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D7D9D7",
        secondary: "#C9C5CB",
        tertiary: "#BAACBD",
        quaternary: "#B48EAE",
        accent: "#646E68",
      },
    },
  },
  plugins: [],
};
