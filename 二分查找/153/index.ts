export function findMin(nums: number[]): number {
  const len = nums.length
  if (nums[len - 1] < nums[len - 2])
    return nums[len - 1]

  let low = 0
  let high = len - 1
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2)
    if (nums[pivot] < nums[high])
      high = pivot

    else
      low = pivot + 1
  }
  return nums[low]
}
