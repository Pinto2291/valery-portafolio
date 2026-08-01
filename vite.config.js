import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // REEMPLAZAR 'valery-portfolio' CON EL NOMBRE EXACTO DE TU REPOSITORIO EN GITHUB
  // Esto es crucial para que los assets (css, js, imágenes) carguen correctamente en GH Pages
  base: '/https://github.com/Pinto2291/valery-portafolio/', 
})