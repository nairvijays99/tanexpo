import { describe, it, expect } from 'vitest'
import { tanexpoVitePlugin } from '../index'

describe('@tanexpo/vite-plugin', () => {
  it('should return a plugin with name', () => {
    const plugin = tanexpoVitePlugin()
    expect(plugin.name).toBe('tanexpo-vite-plugin')
  })
})