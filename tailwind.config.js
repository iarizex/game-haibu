/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
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
    extend: {},
  },
  plugins: [],
}

