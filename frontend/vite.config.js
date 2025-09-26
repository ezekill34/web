import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 base = nombre de tu repo en GitHub
export default defineConfig({
  base: "/web/",
  plugins: [react()],
})
