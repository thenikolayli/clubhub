import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [solid(), tailwindcss()],
  build: {
    outDir: "static",
  },
  base: "/static/",
  server: {
    proxy: {
      "/api": "http://localhost:8080"
    },
    port: 3000,
  }
})
