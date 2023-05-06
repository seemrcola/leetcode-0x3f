// 正难则反
export function minOperations(nums: number[], x: number): number {
  let ans = -1

  let s = nums.reduce((c, p) => c + p, 0)
  
  let target = s - x
  if (target < 0) return -1 

  // 现在只需要计算出和为target的最长字数组就行
  let left = 0
  let right = 0
  let total = 0
  for (right; right < nums.length; right++) {
      total += nums[right]
      while(total > target) {
          total -= nums[left]
          left++
      }
      if(total === target) 
          ans = Math.max(ans, right - left + 1)
  } 
  if(ans < 0) return ans
  return nums.length - ans
};
