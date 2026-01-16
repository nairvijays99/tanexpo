# vite-plugin-tanexpo

A Vite plugin to enable React Native Web support in TanExpo applications.

## Features

- **Automated Aliasing**: Automatically aliases `react-native` to `react-native-web`.
- **Deep Redirection**: Handles internal React Native redirects for legacy library compatibility.
- **ESM Path Correction**: Ensures compatibility for libraries like `inline-style-prefixer` and `css-in-js-utils`.
- **Platform Extensions**: Prioritizes `.web.*` extensions for web-specific components.
- **SSR Support**: Configures `noExternal` for seamless server-side rendering with React Native Web.

## Installation

```bash
npm install vite-plugin-tanexpo --save-dev
# or
pnpm add -D vite-plugin-tanexpo
# or
yarn add -D vite-plugin-tanexpo
```

## Usage

Add it to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import tanexpoVitePlugin from 'vite-plugin-tanexpo';

export default defineConfig({
  plugins: [
    tanexpoVitePlugin({
      externalPackages: ['some-rn-library-to-include'] // Optional
    })
  ]
});
```

## Options

| Option | Type | Description |
| --- | --- | --- |
| `externalPackages` | `string[]` | Additional packages to include in SSR `noExternal` and `optimizeDeps`. |

## License

MIT
