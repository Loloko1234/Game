/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "865px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      margin: {
        26: "6.75rem",
      },
      colors: {
        "custom-color": "hsl(209, 23%, 22%)",
        "custom-color2": "hsl(207, 26%, 17%)",
        "custom-color3": "hsl(0, 0%, 98%)",
      },
      boxShadow: {
        custom:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      top: {
        26: "10rem",
      },
    },
  },
  plugins: [],
};
