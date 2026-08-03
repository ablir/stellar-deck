import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the domain root, so assets resolve against '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
