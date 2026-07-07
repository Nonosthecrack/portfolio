import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' → fonctionne sur GitHub Pages (https://<user>.github.io/<repo>/)
// et sur n'importe quel hébergeur sans modification.
export default defineConfig({
  base: './',
  plugins: [vue()],
})
