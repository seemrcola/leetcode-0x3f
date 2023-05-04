import { it, describe, expect } from 'vitest'
import { minSubArrayLen } from '../index.js'
describe('209', () => {
  it('test 1', () => {
    const target = 7
    const nums = [2, 3, 1, 2, 4, 3]
    expect(minSubArrayLen(target, nums)).toBe(2)
  })

  it('test 2', () => {
    const target = 11
    const nums = [1, 2, 3, 4, 5]
    expect(minSubArrayLen(target, nums)).toBe(3)
  })
})
