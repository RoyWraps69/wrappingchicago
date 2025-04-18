import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-tooltip',
            'lucide-react'
          ]
        },
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name || '';
          let extType = name.split('.').at(1) || '';
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        }
      }
    },
    cssMinify: true,
    assetsInlineLimit: 4096,
    modulePreload: {
      polyfill: true,
    },
    sourcemap: false,
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
  },
  server: {
    host: "::",
    port: 8080
  },
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
}))
