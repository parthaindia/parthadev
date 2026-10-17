import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base must match the GitHub Pages project URL: https://parthaindia.github.io/parthadev/
export default defineConfig({
  base: '/parthadev/',
  plugins: [react()],
})
