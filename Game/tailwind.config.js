/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        26: "6.75rem",
      },
      top: {
        26: "10rem",
      },
    },
  },
  plugins: [],
};
