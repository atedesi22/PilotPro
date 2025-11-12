import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-800': '#34495E',
        'green-300': '#A2E0D4',
        'orange-300': '#F7A384',
        'background-light': '#FDFDFD',
        'background-alt': '#F5F7F9',
        'gray-900': '#4A4A4A',
        'border-grey': '#DDE6ED',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Corps du texte
        heading: ['Montserrat', 'sans-serif'], // Titres
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
