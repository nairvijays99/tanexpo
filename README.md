# TanExpo

Share UI components between Expo Native and TanStack Start.

## 🚀 Features

- **Cross-platform routing**: Use the same router API on web and native
- **Shared components**: Write once, run on web and mobile
- **Type-safe**: Full TypeScript support
- **Modern tooling**: Built with Vite, Expo, and TanStack Router

## 📦 Packages

| Package | Version | Description |
|---------|---------|-------------|
| [`@tanexpo/router`](./packages/router) | [![npm](https://img.shields.io/npm/v/@tanexpo/router)](https://www.npmjs.com/package/@tanexpo/router) | Cross-platform router for TanStack and Expo |
| [`@tanexpo/create`](./packages/cli) | [![npm](https://img.shields.io/npm/v/@tanexpo/create)](https://www.npmjs.com/package/@tanexpo/create) | CLI to create TanExpo applications |
| [`@tanexpo/vite-plugin`](./packages/vite-plugin) | [![npm](https://img.shields.io/npm/v/@tanexpo/vite-plugin)](https://www.npmjs.com/package/@tanexpo/vite-plugin) | Vite plugin for TanExpo projects |

## 🏁 Getting Started

### Create a new project

```bash
npx @tanexpo/create my-app
cd my-app
pnpm install