# Architectural Decision Record (ADR)
## Expo-First Navigation Strategy for TanExpo Router

**Status:** Accepted  
**Date:** 2025-12-16  
**Scope:** `packages/router`

---

## Context

TanExpo is a cross-platform monorepo designed primarily for **Expo / React Native developers**, with **TanStack Start** adopted on the web to enable **SSR**.

TanExpo integrates two routing systems:

- **Expo Router** — native-first, file-based, `[param]` syntax
- **TanStack Router** — web-first, `$param` syntax, powerful SSR primitives

While both routers solve navigation, they differ significantly in:
- mental model
- API surface
- dynamic route syntax
- target audience

TanStack Router was introduced into TanExpo **for infrastructure reasons (SSR)** — not to redefine how developers think about navigation.

---

## Decision

**TanExpo will expose an Expo Router–style navigation API as its public contract.**

TanStack Router will be treated as an **internal implementation detail** on the web and **must not leak** into shared UI or feature code.

> Expo Router defines the developer experience.  
> TanStack Router enables SSR.

---

## Rationale

### Why Expo-First?

1. **Developer familiarity**
   - Expo Router is already the default for React Native developers
   - File-based routing and `[param]` syntax are intuitive and widely adopted

2. **Lower cognitive load**
   - Avoids forcing developers to learn `$param` syntax
   - Prevents “web vs native” navigation documentation

3. **Correct abstraction boundary**
   - Developers should not reason about SSR internals
   - Infrastructure concerns should stay inside the framework

4. **Long-term maintainability**
   - Centralizes translation logic in one place
   - Allows internal router changes without breaking apps

> DX is prioritized over lowest-common-denominator purity.

---

## Implications

### Public API (What developers use)

TanExpo routing APIs will mirror **Expo Router semantics**:

- `<Link href="/users/[id]" params={{ id }} />`
- `useRouter().push(href, params)`
- File-based routing conventions

### Internal Implementation (Hidden)

- Native: Expo Router used directly
- Web: TanStack Router adapted internally
- Route syntax translated internally (`[id] → $id`)
- SSR powered by TanStack Start

---

## Adapter Strategy

### Route Syntax Translation

```ts
// Expo → TanStack
// "/users/[id]" → "/users/$id"
export function expoPathToTanStack(path: string): string {
  return path.replace(/\[([^\]]+)\]/g, "$$$1");
}
```

This transformation:
- is internal to `packages/router`
- is never exposed to consumers
- keeps shared code platform-agnostic

---

## Strategy

- Introduce `<Link href params />`
- Introduce `useRouter()` (Expo-style)
- Enforce Expo-style navigation exclusively


---

## API Evolution Policy

### When to Extend (Non-breaking)
- Adding optional props
- Introducing new hooks
- Improving internal behavior without semantic changes

### When to Break
- Intersection-only API limits expressiveness
- Expo Router semantics cannot be represented
- Migration can be clearly documented or automated

Breaking changes must be:
- intentional
- versioned
- communicated early

---

## Non-Goals

- Full parity with TanStack Router APIs
- Router-level navigation guards
- Data loaders or route lifecycle hooks
- Typed routes (for now)

These may be evaluated independently in future ADRs.

---

## Consequences

### Positive
- Expo developers feel immediately at home
- Navigation mental model is consistent across platforms
- SSR remains fully supported
- Abstraction boundaries are explicit and enforced

### Trade-offs
- TanStack Router power features are not directly exposed
- Additional adapter code must be maintained

This trade-off is intentional and aligned with TanExpo’s goals.

---

## Summary

TanExpo Router is an **opinionated abstraction**.

It optimizes for:
- Expo developer experience
- Long-term maintainability
- SSR support without leakage of infrastructure concerns

**Expo Router defines the contract.  
TanStack Router powers the web.**
