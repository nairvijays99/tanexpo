# TanExpo

TanExpo is a **cross-platform monorepo** that enables sharing **UI components, navigation primitives, and application features** between:

- **Expo / React Native** (native apps)
- **TanStack Start / Vite** (web apps)

It is inspired by projects like **Solito**, but tailored for **TanStack Start + Expo**, using **pnpm workspaces**, **TypeScript**, and **Biome**.

TanExpo treats **React Native as the primary UI abstraction**, with the web acting purely as a renderer via **react-native-web**.

---

## ✨ Goals

- Share UI, navigation, and feature code between **native and web**
- Use **React Native components everywhere**
- Render identical UI on native and web
- Support **platform-specific files** only when required
- Maintain **one React / React Native version** across the entire repo
- Keep configuration predictable and contributor-friendly

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
│  ├─ features/      # Shared feature modules (in progress)
│  └─ router/        # Shared cross-platform navigation primitives
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
Shared **UI components** built using **React Native primitives**.

- No web-specific UI libraries
- No DOM-specific code
- Same component renders on native and web

### `packages/features` (in progress)
Shared **feature-level components and logic** (screens, flows, providers).

### `packages/router`
Shared **cross-platform routing primitives**.

- Exposes a minimal, platform-agnostic API
- Works on both native and web
- Hides router-specific implementations
- Uses file resolution (`.native.tsx`) instead of runtime platform checks

All shared packages:
- Prefer platform-agnostic implementations
- Use platform-specific files only when interacting with SDKs
- Are imported via clean aliases:
  ```ts
  import { Button } from 'app/ui/Button'
  import { Link, useRouter } from 'app/router'
  ```

---

## 🧠 Core Architecture: React Native Everywhere

TanExpo enables **true cross-platform UI sharing** by rendering **React Native components everywhere**.

- **Native** renders React Native directly
- **Web** renders the same components using **react-native-web**
- Web works by aliasing:
  ```ts
  react-native → react-native-web
  ```
  in the web Vite configuration

The result:
- Identical component trees
- Identical layout behavior
- Minimal platform conditionals
- No duplicated UI implementations

---

## 🧩 Component Strategy

### ✅ Platform-agnostic UI (default)

Platform-agnostic components should be the **default choice**.

They:
- Use only React Native primitives
- Contain no platform checks
- Render the same on native and web

```ts
// packages/ui/src/Button.tsx
import { Pressable, Text } from 'react-native'

export const Button = ({ label }) => (
  <Pressable>
    <Text>{label}</Text>
  </Pressable>
)
```

#### Rules

- `*.native.tsx`
  - Used for **native-only SDKs** (Expo APIs, native auth, sensors, etc.)
- `*.tsx`
  - Used for **platform-agnostic UI** or **web-specific implementations**
- **Never branch on platform inside a component**
- Platform differences must be expressed via **file resolution only**

---

## 🧭 Cross-Platform Navigation

TanExpo provides shared routing primitives via `packages/router`, following an **Expo Router–first mental model**, while mapping internally to:

- **Expo Router** on native
- **TanStack Router** on web

### Design principles

- Expo-first API for developer experience
- Minimal, honest surface area
- No router-specific imports in shared code
- No runtime platform checks
- Platform differences handled via file resolution

---

## 🔗 `<Link />`

The `Link` component works identically on **native and web**.

```ts
import { Link } from 'app/router'

<Link href="/about">
  Go to About
</Link>
```

### Dynamic routes

```ts
<Link
  href={{
    pathname: '/user/[id]',
    params: { id: 'bacon' }
  }}
>
  User Profile
</Link>
```

### Dynamic routes with query params

```ts
<Link
  href={{
    pathname: '/user/[id]',
    params: {
      id: 'bacon',
      tab: 'settings'
    }
  }}
>
  User Settings
</Link>
```

### Prefetching

Prefetching follows the **Expo Router API**, with additional hints supported on web.

```ts
<Link href="/feed" prefetch>
  Feed
</Link>

<Link href="/feed" prefetch="intent" /> 
<Link href="/feed" prefetch="viewport" /> 
```

- Native treats all `prefetch` values as `true`
- Web maps `prefetch` to TanStack Router `preload`

---

## 🧭 `useRouter()`

`useRouter()` provides imperative navigation with the same API on native and web.

```ts
import { useRouter } from 'app/router'

const router = useRouter()

router.push('/about')

router.push({
  pathname: '/user/[id]',
  params: { id: 'bacon' }
})

router.replace({
  pathname: '/user/[id]',
  params: { id: 'admin' }
})

router.back()
```

### Prefetching routes imperatively

```ts
router.prefetch('/feed')

router.prefetch({
  pathname: '/user/[id]',
  params: { id: 'bacon' }
})
```

---

## 🧠 Platform-Specific Resolution

Platform differences are handled **by file resolution**, not runtime logic.

```ts
// packages/ui/provider/Auth0Provider.tsx (web)
import { Auth0Provider } from '@auth0/auth0-react'
export { Auth0Provider }
```

```ts
// packages/ui/provider/Auth0Provider.native.tsx (native)
import { Auth0Provider } from 'react-native-auth0'
export { Auth0Provider }
```

Usage is **identical everywhere**:

```ts
import { Auth0Provider } from 'app/ui/provider/Auth0Provider'
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
      "react-native-web": "~0.21.0",
      "@types/react": "19.1.0",
      "@types/react-dom": "19.1.0"
    }
  }
}
```

---

## 🧪 Version Consistency Check

```bash
pnpm check-versions
```

---

## 🧹 Formatting & Linting (Biome)

```bash
pnpm lint
pnpm format
```

---

## 🚀 Running the Apps

### Native (Expo)

```bash
pnpm native:ios
pnpm native:android
```

### Web (TanStack Start / Vite)

```bash
pnpm web:dev
pnpm web:build
pnpm web:serve
```

