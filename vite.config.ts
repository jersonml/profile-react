import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Escuchar en todas las interfaces
    port: 5173,      // Puerto predeterminado
    watch: {
      usePolling: true, // Para garantizar que se detecten cambios en entornos Docker
    },
  },
})