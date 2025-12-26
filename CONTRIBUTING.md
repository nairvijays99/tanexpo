# Contributing to TanExpo

Thank you for your interest in contributing to TanExpo! Here are some guidelines to help you get started.

## Development Setup

1. Fork and clone the repository
2. Install dependencies: `pnpm install`
3. Build packages: `pnpm build`
4. Run tests: `pnpm test`

## Project Structure

tanexpo/
├── packages/ # Published packages
│ ├── module/ # tanexpo
│ ├── cli/ # create-tanexpo-app
│ └── vite-plugin/ # tanexpo-vite-plugin
├── examples/ # Example projects/templates
└── scripts/ # Development scripts

## Pull Request Process

1. Create a changeset for your changes: `pnpm changeset`
2. Run tests: `pnpm test`
3. Ensure linting passes: `pnpm lint`
4. Update documentation if needed
5. Submit your PR with a clear description

## Code Style

- Use TypeScript with strict mode
- Follow Biome formatting rules
- Write tests for new features
- Use meaningful commit messages

## Release Process

Releases are automated using Changesets. When PRs are merged to main:
1. Changesets creates a version PR
2. After merge, packages are published to npm
3. GitHub releases are created automatically