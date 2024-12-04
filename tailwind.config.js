const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      colors: {
        'acento2': '#F8CD2A',
        'acento1': '#84FF01',
        'principal': '#234142',
        'sombras1': '#010D14',
        'secundario': '#459857',
        'sombras2': '#585E54',
        'fondo': '#010409',
        'texto': '#d3dce6',
      },
      fontFamily: {
        sans: ['Exo 2', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};