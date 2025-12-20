import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      jsx: 'react-jsx',
      skipLibCheck: true
    }
  },
  sourcemap: true,
  clean: true,
  external: ['react', 'react-native', 'expo-router', '@tanstack/react-router']
})