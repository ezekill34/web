import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANTE: cambia "web" si tu repo en GitHub se llama diferente
export default defineConfig({
  base: "/web/",
  plugins: [react()],
})
