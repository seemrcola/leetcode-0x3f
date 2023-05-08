export function threeSumClosest(nums: number[], target: number): number {
  let ans = Infinity

  nums.sort((a, b) => a - b)
  const len = nums.length

  for (let i = 0; i < len - 2; i++) {
    if (nums[i] === nums[i - 1])
      continue

    let start = i + 1
    let end = len - 1

    while (start < end) {
      const total = nums[i] + nums[start] + nums[end]

      if (total > target)
        end--

      else if (total < target)
        start++

      else return target

      if (Math.abs(total - target) < Math.abs(ans - target))
        ans = total
    }
  }

  return ans
}
