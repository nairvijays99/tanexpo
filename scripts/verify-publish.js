#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🔍 Verifying packages for publish...\n')

const packages = [
  { 
    name: 'router', 
    pkgName: '@tanexpo/router',
    hasModule: true
  },
  { 
    name: 'cli', 
    pkgName: '@tanexpo/create',
    hasModule: false  // CLI doesn't need ESM module
  },
  { 
    name: 'vite-plugin', 
    pkgName: '@tanexpo/vite-plugin',
    hasModule: true
  }
]

let allGood = true

packages.forEach(({ name, pkgName, hasModule }) => {
  const pkgPath = path.join(__dirname, '..', 'packages', name, 'package.json')
  
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
    
    console.log(`📦 ${pkgName}:`)
    
    // Check required fields for ALL packages
    const checks = [
      { field: 'name', expected: pkgName },
      { field: 'version', validator: (v) => v !== '0.0.0' },
      { field: 'main', expected: './dist/index.js' },
      { field: 'types', expected: './dist/index.d.ts' },
      { field: 'publishConfig.access', expected: 'public' },
      { field: 'files', validator: (v) => v.includes('dist') }
    ]
    
    // Only check module field for packages that need it
    if (hasModule) {
      checks.push({ field: 'module', expected: './dist/index.mjs' })
    }
    
    checks.forEach(({ field, expected, validator }) => {
      const value = field.split('.').reduce((obj, key) => obj?.[key], pkg)
      
      if (field === 'module' && !hasModule) {
        // Skip module check for CLI
        console.log(`  ⏭️  ${field}: not required for CLI`)
        return
      }
      
      if (validator) {
        if (!validator(value)) {
          console.log(`  ❌ ${field}: ${value} (invalid)`)
          allGood = false
        } else {
          console.log(`  ✅ ${field}: ${value}`)
        }
      } else if (value !== expected) {
        console.log(`  ❌ ${field}: ${value} (expected: ${expected})`)
        allGood = false
      } else {
        console.log(`  ✅ ${field}: ${value}`)
      }
    })
    
    // Check dist exists
    const distPath = path.join(__dirname, '..', 'packages', name, 'dist')
    if (!fs.existsSync(distPath)) {
      console.log(`  ⚠️  dist directory not found - run "pnpm build" first`)
    }
    
    console.log()
    
  } catch (error) {
    console.log(`❌ Error reading ${pkgName}:`, error.message)
    allGood = false
  }
})

if (allGood) {
  console.log('✅ All packages are ready for publish!')
  process.exit(0)
} else {
  console.log('❌ Some packages need fixes before publishing')
  process.exit(1)
}