# TanExpo

TanExpo is a **cross‑platform monorepo** that enables sharing **UI components and application features** between:

- **Expo / React Native** (native apps)
- **TanStack Start / Vite** (web apps)

It is inspired by projects like **Solito**, but tailored for **TanStack Start + Expo**, using **pnpm workspaces**, **TypeScript**, and **Biome**.

---

## ✨ Goals

- Share UI and feature code between **native and web**
- Use **React Native components everywhere**
- Support **platform‑specific files** (`.native.tsx` vs `.tsx`)
- Maintain **one React version** across the entire repo
- Provide a clean, predictable developer experience

---

## 🗂 Repository Structure

```
tanexpo/
├─ apps/
│  ├─ native/        # Expo (React Native) app
│  └─ web/           # TanStack Start / Vite web app
│
├─ packages/
│  ├─ ui/            # Shared UI components
│  └─ features/      # Shared feature modules
│
├─ scripts/
│  └─ check-versions.js
│
├─ .vscode/
│  ├─ settings.json
│  └─ extensions.json
│
├─ biome.json
├─ pnpm-workspace.yaml
├─ tsconfig.base.json
├─ package.json
└─ README.md
```

---

## 📦 Package Philosophy

### `packages/ui`
Shared **presentational components** (buttons, text, layouts, etc).

### `packages/features`
Shared **feature logic** (screens, flows, domain logic).

Both packages:
- Use **React Native primitives**
- Support **platform‑specific implementations**
- Are imported via clean aliases:
  ```ts
  import { H1 } from 'app/ui/Heading'
  ```

---

## 🧠 Platform‑Specific Resolution

Platform resolution is achieved via filename conventions:

```ts
// packages/ui/src/Heading.tsx        → Web
export const H1 = ({ children }) => <h1>{children}</h1>

// packages/ui/src/Heading.native.tsx → Native (Expo)
import { View, Text } from 'react-native'

export const H1 = ({ children }) => (
  <View>
    <Text>{children}</Text>
  </View>
)
```

Usage (same import everywhere):

```ts
import { H1 } from 'app/ui/Heading'
```

- **Expo (Metro)** resolves `.native.tsx`
- **Web (Vite)** resolves `.tsx`

---

## 🧩 Clean Imports with `app/*`

TypeScript path aliases are defined in `tsconfig.base.json`:

```json
{
  "paths": {
    "app/ui/*": ["packages/ui/src/*"],
    "app/features/*": ["packages/features/src/*"]
  }
}
```

---

## 🔒 Dependency Strategy (Very Important)

### Expo is the **version authority**

Expo dictates compatible versions for:
- `react`
- `react-dom`
- `react-native`
- `react-native-web`

These are **pinned in the root `package.json`** and shared across all apps and packages.

### Enforcement via `pnpm.overrides`

```json
{
  "pnpm": {
    "overrides": {
      "react": "19.1.0",
      "react-dom": "19.1.0",
      "react-native": "0.81.5",
      "react-native-web": "~0.19.12",
      "@types/react": "19.1.0",
      "@types/react-dom": "19.1.0"
    }
  }
}
```

---

## 🧪 Version Consistency Check

A custom script ensures all workspace packages share the same version as the root:

```bash
pnpm check-versions
```

---

## 🧹 Formatting & Linting (Biome)

- Biome is used for formatting and linting
- No ESLint or Prettier required

```bash
pnpm lint
pnpm format
```

---

## 🧠 VS Code Setup

Workspace settings in `.vscode/` ensure:
- Biome as default formatter
- Format on save
- No import extensions (`.tsx`) added
- Consistent DX for all contributors

---

## 🚀 Running the Apps

### Native (Expo)

```bash
pnpm --filter ./apps/native start
```

### Web (TanStack Start / Vite)

```bash
pnpm --filter ./apps/web dev
```

---

## 🧭 Development Rules

- ❌ Do NOT install React in app folders
- ❌ Do NOT upgrade React without upgrading Expo SDK
- ❌ Do NOT import file extensions (`.tsx`, `.native.tsx`)
- ✅ Use `app/*` imports
- ✅ Add shared code only in `packages/*`

---

## 📄 License

MIT
