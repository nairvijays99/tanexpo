import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs'],
  dts: {
    compilerOptions: {
      lib: ["ES2020"],
      skipLibCheck: true,
      types: ["node"]
    }
  },
  sourcemap: true,
  clean: true,
  banner: {
    js: '#!/usr/bin/env node'
  }
})