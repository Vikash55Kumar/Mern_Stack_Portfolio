import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy : {
  //     '/api/v1':"http://localhost:4000",
  //   }
  // },
  // build: {
  //   outDir: 'dist'
  // },
  plugins: [react()],
})
