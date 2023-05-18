峰值元素是指其值严格大于左右相邻值的元素。

给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞ 。

你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

示例 1：

输入：nums = [1,2,3,1]
输出：2
解释：3 是峰值元素，你的函数应该返回其索引 2。
示例 2：

输入：nums = [1,2,1,3,5,6,4]
输出：1 或 5 
解释：你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
 

提示：

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1
对于所有有效的 i 都有 nums[i] != nums[i + 1]

#### 思路整理
1. 很容易想到的就是找到最大值，最大值一定是峰值，但是这样的时间复杂度是O(n)
2. 那么我们可以使用二分查找，因为题目中说了nums[-1] = nums[n] = -∞，那么我们可以根据这个条件来进行二分查找
3. 如果nums[mid] < nums[mid + 1]，那么说明mid左边一定有峰值，因为nums[-1] = -∞，那么我们就可以将blue指向mid + 1
4. 如果nums[mid] > nums[mid + 1]，那么说明mid右边一定有峰值，因为nums[n] = -∞，那么我们就可以将red指向mid
5. 如果nums[mid] === nums[mid + 1]，那么说明mid左右都有峰值，那么我们可以将blue指向mid + 1，也可以将red指向mid
6. 二分查找结束之后，blue和red指向的就是峰值

```ts
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
```
