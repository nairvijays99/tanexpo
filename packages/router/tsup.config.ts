import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      skipLibCheck: true,
      types: []  // Don't include react-native types in vite-plugin
    }
  },
  sourcemap: true,
  clean: true,
  external: ['vite']
})