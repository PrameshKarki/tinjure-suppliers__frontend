/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        punch: {
          50: "#fdf4ef",
          100: "#fae5da",
          200: "#f4c9b4",
          300: "#eda484",
          400: "#e57652",
          500: "#df532f",
          600: "#d13d25",
          700: "#ad2d21",
          800: "#8b2621",
          900: "#70221e",
          950: "#3c0f0e",
        },
        astronaut: {
          50: "#eef4ff",
          100: "#dfebff",
          200: "#c6d8ff",
          300: "#a3befe",
          400: "#7f99fa",
          500: "#6176f3",
          600: "#434ee8",
          700: "#353ccd",
          800: "#2e36a5",
          900: "#293078",
          950: "#1a1d4c",
        },
        "alizarin-crimson": {
          50: "#fef2f2",
          100: "#fee2e3",
          200: "#fecacb",
          300: "#fca5a7",
          400: "#f77276",
          500: "#ee454a",
          600: "#d92429",
          700: "#b81d21",
          800: "#981c1f",
          900: "#7f1d20",
          950: "#450a0c",
        },
      },
    },
  },
  plugins: [],
};
