import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: '8e4a-2804-2484-961e-5b00-b1ca-658e-e883-4f36.ngrok-free.app '
  }
})
