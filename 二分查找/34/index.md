给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 
提示：

0 <= nums.length <= 105
-109 <= nums[i] <= 109
nums 是一个非递减数组
-109 <= target <= 109

#### 思路整理
1. 根据题意可以马上想到二分查找
2. 二分查找的时候，找到target之后，向左右两边扩散，找到左右边界，但是方案不够优秀
3. 那我们有没有办法直接查找到左右边界呢

```ts
export function searchRange(nums: number[], target: number): number[] {
  function bs(nums: number[], target: number) {
    let blue = -1
    let red = nums.length

    while (blue < red - 1) {
      const mid = (red + blue) >> 1
      // 这里我将直接判断小于，确保找到一个比target小的数
      if (nums[mid] < target)
        blue = mid
      else red = mid
    }
    // 查找结束之后，blue指向的是最后一个比target小的数，那么red指向的就是target或者比target大的数
    return red
  }

  const start = bs(nums, target)
  if (start === nums.length || nums[start] !== target)
    return [-1, -1]
  // 那么我们找到target之后，查找target+1，根据上面的方案我们会知道，我们会找到比target小的最后一个数
  const end = bs(nums, target + 1) - 1
  return [start, end]
}
```

#### Q&A
1. 为什么要找到比target小的最后一个数
   - 因为我们要找到target的左边界，那么我们就要找到比target小的最后一个数，这样我们才能确定target的左边界
2. 为什么要找到target+1
   - 因为我们要找到target的右边界，那么我们就要找到比target+1小的第一个数，这样我们才能确定target的右边界
