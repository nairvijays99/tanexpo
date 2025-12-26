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
| [`tanexpo`](./packages/module) | [![npm](https://img.shields.io/npm/v/@tanexpo/router)](https://www.npmjs.com/package/tanexpo) 
| Cross-platform router for TanStack and Expo |
| [`create-tanexpo-app`](./packages/cli) | [![npm](https://img.shields.io/npm/v/@tanexpo/create)](https://www.npmjs.com/package/create-tanexpo-app) 
| CLI to create TanExpo applications (todo) |
| [`tanexpo-vite-plugin`](./packages/vite-plugin) | [![npm](https://img.shields.io/npm/v/@tanexpo/vite-plugin)](https://www.npmjs.com/package/tanexpo-vite-plugin) | Vite plugin for TanExpo projects (todo) |

## 🏁 Getting Started

### Create a new project

```bash
npx create-tanexpo-app my-app
cd my-app
pnpm install