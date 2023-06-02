export function minEatingSpeed(piles: number[], h: number): number {
  // 找到最大速度
  let max = 1
  for (const i of piles)
    max = Math.max(max, i)

  // 二分的左边界
  let left = 1
  // 二分的右边界
  let right = max

  while (left < right) {
    const mid = left + Math.floor((-left + right) / 2)
    if (calc(piles, mid) > h)
      left = mid + 1
    else right = mid
  }

  return left
}

function calc(piles: number[], speed: number): number {
  let sum = 0
  for (const i of piles)
    sum += Math.ceil(i / speed)

  return sum
}
