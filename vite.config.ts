import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base : 'https://github.com/mbsurya191222004/Effects',
  server : {
    host : true ,
    port : 8000,
  },
})
