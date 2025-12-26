import { defineConfig } from 'tsup'
import { glob } from 'glob'

// Build every source file
export default defineConfig({
  entry: [
      'src/index.ts',
      'src/index.web.ts',
      'src/index.native.ts',
      'src/components/**/*',
      'src/hooks/**/*',
      'src/utils/**/*',
  ],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  bundle: true, 
  external: ['react', 'react-native', 'react-native-web', 'expo', 'expo-router', '@tanstack/react-router'],
  outDir: 'dist'
})