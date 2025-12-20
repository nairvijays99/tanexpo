import { defineConfig } from 'tsup'
import { glob } from 'glob'

// Build every source file
export default defineConfig({
  entry: glob.sync('src/**/*.{ts,tsx}'),
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  bundle: false, 
  external: ['react', 'react-native', 'expo', 'expo-router', '@tanstack/react-router'],
  outDir: 'dist',
  outExtension: ({ format }) => ({
    js: format === 'esm' ? '.mjs' : '.js'
  }),
  // Preserve directory structure
  esbuildOptions(options) {
    options.outbase = 'src'
  }
})