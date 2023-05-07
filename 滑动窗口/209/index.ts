// 长度最小子数组
export function minSubArrayLen(target: number, nums: number[]): number {
  let ans = nums.length + 1
  let left = 0 
  let right = 0
  let total = 0
  for(right; right < nums.length; right++) {
      total += nums[right]
      while(total - nums[left] >= target) {
          total -= nums[left]
          left += 1    
      }
      if(total >= target)
          ans = Math.min(ans, right - left + 1)        
  }

  if(ans == nums.length + 1) ans = 0
  return ans
};


// 写法2
function minSubArrayLen2(target: number, nums: number[]): number {
  let ans = nums.length + 1
  let left = 0 
  let right = 0 
  let total = 0
  for(right; right < nums.length; right++) {
      total += nums[right]
      while(total >= target) { // 这里要判断total >= target
          ans = Math.min(ans, right - left + 1) // 一旦符合条件就更新ans的值
          total -= nums[left]
          left += 1    
      }
  }

  if(ans == nums.length + 1) ans = 0
  return ans
};
