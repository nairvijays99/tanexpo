const { getDefaultConfig } = require('expo/metro-config')
const path = require('path')

const config = getDefaultConfig(__dirname)

// add workspace root and packages to watchFolders
config.watchFolders = [
  path.resolve(__dirname, '..', '..') // repo root
]

// Ensure metro resolves symlinked packages (pnpm stores node_modules differently)
config.resolver = {
  ...config.resolver,
  sourceExts: [...config.resolver.sourceExts, 'cjs', 'ts', 'tsx'],
  // optionally add resolver.extraNodeModules if needed
}

module.exports = config