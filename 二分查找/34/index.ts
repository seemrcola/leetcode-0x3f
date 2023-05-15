export function searchRange(nums: number[], target: number): number[] {
  function bs(nums: number[], target: number) {
    let blue = -1
    let red = nums.length

    while (blue < red - 1) {
      const mid = (red + blue) >> 1
      if (nums[mid] < target)
        blue = mid
      else red = mid
    }

    return red
  }

  const start = bs(nums, target)
  if (start === nums.length || nums[start] !== target)
    return [-1, -1]
  const end = bs(nums, target + 1) - 1
  return [start, end]
}
