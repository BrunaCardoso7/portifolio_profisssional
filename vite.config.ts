import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '860e-177-107-31-247.ngrok-free.app', // Apenas o domínio, sem "https://"
    ],
  },
});