import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import { peerDependencies, dependencies } from './package.json'
// import plugin from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['vite-component-library-test/dist/assets/style.css'],
  },
  plugins: [
    react(),
    dts({ include: ['lib'] }),
    // plugin({
    //   jsxRuntime: 'classic',
    // }),
  ],
  build: {
    copyPublicDir: false,
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      // external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
  },
})
