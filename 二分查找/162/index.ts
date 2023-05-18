export function findPeakElement(nums: number[]): number {
  let blue = 0
  let red = nums.length - 1

  while (blue < red) {
    const mid = (blue + red) >> 1
    if (nums[mid] < nums[mid + 1])
      blue = mid + 1
    else red = mid
  }
  return blue
}
