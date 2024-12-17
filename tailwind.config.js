//const defaultTheme = require("tailwindcss/defaultTheme");
import * as defaultTheme from "tailwindcss/defaultTheme"
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
        'acento1': '#84FF01', // verde claro
        'acento2': '#F8CD2A', // amarillo
        'principal': '#234142', // azul oscuro
        'sombras1': '#010D14', // gris oscuro azulado
        'secundario': '#459857', // verde oscuro
        'sombras2': '#585E54', // gris claro
        'fondo': '#010409', // gris casi negro
        'texto': '#d3dce6', // blanco
      },
      fontFamily: {
        sans: ['"Exo 2"', ...defaultTheme.fontFamily.sans],
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
      animation: {
        'border': 'border 4s linear infinite',
      },
      keyframes: {
          'border': {
              to: { '--border-angle': '360deg' },
          }
      }     
    },
  },
  plugins: [],
};
