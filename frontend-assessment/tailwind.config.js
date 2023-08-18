/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#039BF0",
        primary50:"#21ACFD",
        // primary500: "#2CA955",
        // primary700: "#1A6533",
        // gray500:"#667085",
        // gray700:"#344054",
        // error600:"#D92D20",
      },
      container: {
        center: true,
        padding: {
          Default: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}