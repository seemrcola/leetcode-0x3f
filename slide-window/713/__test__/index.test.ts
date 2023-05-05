import { it, describe, expect } from 'vitest'
import { numSubarrayProductLessThanK } from '../index.js'
describe('209', () => {
  it('test 1', () => {
    const k = 0
    const nums = [1,2,3]
    expect(numSubarrayProductLessThanK(nums, k)).toBe(0)
  })
})
