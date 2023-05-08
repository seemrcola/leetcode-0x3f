// 最大连续1的个数
export function longestOnes(nums: number[], k: number): number {
  let ans = 0
  let count = 0
  let left = 0
  let right = 0

  for (right; right < nums.length; right++) {
    count += 1 - nums[right] // 0 - 1 转化
    while (count > k) {
      count -= 1 - nums[left] // 省去写if else
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }

  return ans
}
