export function maxArea(height: number[]): number {
  let max = -1

  let start = 0
  let end = height.length - 1

  while (start < end) {
    const waters = Math.min(height[start], height[end]) * (end - start)
    max = Math.max(max, waters)
    if (height[start] > height[end]) {
      while (height[end - 1] <= height[end]) end--
      end--
    }

    else {
      while (height[start + 1] <= height[start]) start++
      start++
    }
  }

  return max
}
