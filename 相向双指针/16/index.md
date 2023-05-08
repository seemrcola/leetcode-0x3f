给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

返回这三个数的和。

假定每组输入只存在恰好一个解。

示例 1：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
示例 2：

输入：nums = [0,0,0], target = 1
输出：0
 
提示：

3 <= nums.length <= 1000
-1000 <= nums[i] <= 1000
-104 <= target <= 104

#### 思路整理
1. 这题和15题非常类似，只不过是求最接近的和，而不是等于target的和
2. 方案近似15题

```ts
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
      // 太大了就缩小total
      if (total > target)
        end--
      // 太小了就增大total
      else if (total < target)
        start++
      // 相等就直接返回
      else return target
      // 判断谁里的更新
      if (Math.abs(total - target) < Math.abs(ans - target))
        ans = total
    }
  }

  return ans
}
```
