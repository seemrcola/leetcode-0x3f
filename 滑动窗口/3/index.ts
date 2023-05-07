// 无重复最长字串
export function lengthOfLongestSubstring(s: string): number {
  let map = new Map()

  let ans = 0
  let left = 0
  let right = 0

  for(right; right < s.length; right++) {
      let cur = s[right]

      while(map.has(cur)) {
          map.delete(s[left])
          left++
      }
      
      map.set(cur, true)
      ans = Math.max(ans, map.size)
  } 

  return ans
};
