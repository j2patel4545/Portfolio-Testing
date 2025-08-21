import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // sabhi network interfaces pe chalega (LAN + localhost)
    port: 5173,      // custom port (chahe to change kar sakte ho)
  },
})
