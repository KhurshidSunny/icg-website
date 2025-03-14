import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173, // Optional: Specify a port (default is 5173)
    allowedHosts: ['icgchemicals.com'], // Add your domain here
  },
});