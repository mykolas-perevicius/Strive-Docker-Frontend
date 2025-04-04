import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src"), }, }, // For shadcn/ui
  server: {
    host: true, // Listen on all interfaces inside container
    port: 5173,
    watch: { usePolling: true, }, // Needed for HMR in some Docker setups (like WSL2)
  },
})
