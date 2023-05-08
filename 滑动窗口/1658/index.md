给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。

如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

示例 1：

输入：nums = [1,1,4,2,3], x = 5
输出：2
解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
示例 2：

输入：nums = [5,6,7,8,9], x = 4
输出：-1
示例 3：

输入：nums = [3,2,20,1,1,3], x = 10
输出：5
解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。

提示：
1 <= nums.length <= 105
1 <= nums[i] <= 104
1 <= x <= 109

#### 思路整理
1. 正难则反，求最长子数组，使得其和为sum(nums) - x
2. 没了，接下来就是基础的滑动窗口思路了

```ts
export function minOperations(nums: number[], x: number): number {
  let ans = -1

  const s = nums.reduce((c, p) => c + p, 0)

  const target = s - x
  if (target < 0)
    return -1

  // 现在只需要计算出和为target的最长字数组就行
  let left = 0
  let right = 0
  let total = 0
  for (right; right < nums.length; right++) {
    total += nums[right]
    while (total > target) {
      total -= nums[left]
      left++
    }
    if (total === target)
      ans = Math.max(ans, right - left + 1)
  }
  if (ans < 0)
    return ans
  return nums.length - ans
}
```
