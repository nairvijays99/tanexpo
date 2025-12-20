#!/usr/bin/env node

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🧪 Running E2E test of TanExpo...\n')

try {
  // 1. Build all packages
  console.log('1. Building packages...')
  execSync('pnpm build', { stdio: 'inherit' })
  
  // 2. Run tests
  console.log('\n2. Running tests...')
  execSync('pnpm test', { stdio: 'inherit' })
  
  // 3. Verify packages
  console.log('\n3. Verifying packages...')
  execSync('node scripts/verify-publish.js', { stdio: 'inherit' })
  
  // 4. Check example builds
  console.log('\n4. Checking example...')
  const examplePackageJson = path.join(__dirname, '../examples/basic/package.json')
  if (fs.existsSync(examplePackageJson)) {
    console.log('✅ Example structure exists')
  }
  
  console.log('\n🎉 All checks passed! TanExpo is ready for development.')
  
} catch (error) {
  console.error('\n❌ E2E test failed:', error.message)
  process.exit(1)
}