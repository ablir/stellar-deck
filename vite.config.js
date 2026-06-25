import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from https://ablirjm.github.io/stellar-deck/
// so all asset URLs must be prefixed with the repo name in production.
export default defineConfig({
  base: '/stellar-deck/',
  plugins: [react()],
})
