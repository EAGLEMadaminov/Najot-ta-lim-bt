/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lyuboy: {
          100: "brown",
          200: "red",
          300: "pink",
          400: "black",
          500: "white",
        },
      },
    },
  },
  plugins: [],
};
