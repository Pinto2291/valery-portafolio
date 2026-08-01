// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Required for Tailwind v4+. If using v3, rely on postcss.config.js instead.

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // FIX: The imported tailwindcss plugin MUST be initialized inside the plugins array.
  ],
  base: '/valery-portafolio/', // Ensure this exactly matches the GitHub repository name.
});