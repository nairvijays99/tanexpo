#!/usr/bin/env node

console.log('🚀 Welcome to TanExpo!')
console.log('This CLI is under development...')

// Basic structure
import { Command } from 'commander'

const program = new Command()

program
  .name('create-tanexpo-app')
  .description('Create a new TanExpo application')
  .version('0.0.0')

program.parse()