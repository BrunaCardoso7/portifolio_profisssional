import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    allowedHosts: [
      '860e-177-107-31-247.ngrok-free.app', // Apenas o domínio, sem "https://"
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    include: ['swiper/react', 'swiper/css', 'swiper/css/pagination']
  },
});
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
//   optimizeDeps: {
//     include: ['swiper/react', 'swiper/css', 'swiper/css/pagination']
//   },
//   server: {
//     allowedHosts: [
//       '860e-177-107-31-247.ngrok-free.app', // Apenas o domínio, sem "https://"
//     ],
//   },
// });