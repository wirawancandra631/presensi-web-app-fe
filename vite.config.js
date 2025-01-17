import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path"
// https://vite.dev/config/
export default defineConfig({
  base: "page/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/public": path.resolve(__dirname, "./public")
    }
  }
})
