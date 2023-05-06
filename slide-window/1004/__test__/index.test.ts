import { it, describe, expect } from 'vitest'
import { longestOnes } from '../index.js'
describe('1004', () => {
  it('test 1', () => {
    const k = 2
    const nums = [1,1,1,0,0,0,1,1,1,1,0]
    expect(longestOnes(nums, k)).toBe(6)
  })
})
