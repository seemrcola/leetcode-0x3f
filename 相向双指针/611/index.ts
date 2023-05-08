export function triangleNumber(nums: number[]): number {
  let ans = 0
  const len = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      let k = len - 1
      while (j < k) {
        if (nums[i] + nums[j] > nums[k]) {
          ans += (k - j)
          break
        }
        k--
      }
    }
  }

  return ans
}
