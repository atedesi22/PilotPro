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
        'gray-900': '#34495E',
        'success-green': '#A2E0D4',
        'alert-orange': '#F7A384',
        'background-light': '#FDFDFD',
        'background-alt': '#F5F7F9',
        'text-deep-grey': '#4A4A4A',
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
