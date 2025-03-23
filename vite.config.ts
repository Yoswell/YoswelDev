import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [
        react(),
        viteCompression({
            algorithm: 'gzip',
        }),
    ],
    resolve: {
        alias: {
          "@": "/src",
        }
    },
    build: {
        minify: 'terser'
    }
})
