import { it, describe, expect } from 'vitest'
import { lengthOfLongestSubstring } from '../index.js'
describe('3', () => {
  it('test 1', () => {
    const target = 'abcabcbb'
    expect(lengthOfLongestSubstring(target)).toBe(3)
  })
})
