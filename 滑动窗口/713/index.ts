// 给你一个整数数组 `nums` 和一个整数 `k` ，请你返回子数组内所有元素的乘积严格**小于** `k` 的连续子数组的数目。
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  // 由于乘积严格小于yu k，所以k <= 1时，返回0
  if (k <= 1)
    return 0

  let ans = 0
  let left = 0
  let right = 0
  let total = 1

  for (right; right < nums.length; right++) {
    total *= nums[right]
    // 当total >= k时，开始移动left指针
    while (total >= k) {
      total /= nums[left]
      left++
    }
    // 当total < k时，更新ans的值
    ans += right - left + 1
  }

  return ans
}
