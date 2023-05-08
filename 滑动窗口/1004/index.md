给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。

示例 1：

输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
输出：6
解释：[1,1,1,0,0,1,1,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 6。
示例 2：

输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
输出：10
解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
粗体数字从 0 翻转到 1，最长的子数组长度为 10。
 

提示：

1 <= nums.length <= 105
nums[i] 不是 0 就是 1
0 <= k <= nums.length

#### 思路整理
1. 首先把问题转化成，count(0) <= k 的情况下，滑动窗口的最大值
2. 首先是识别到这是一个滑动窗口的问题，然后定义左右指针，左指针指向0，右指针指向0
3. 定义一个变量count，用来记录窗口中0的个数
4. 当遇到1时count不变，当遇到0时count加1
5. 当count > k时，开始移动左指针，判断左指针的指向的值，0的话count减1，1的话count不变
6. 计算当前ans的值，ans = Math.max(ans, right - left + 1)

```ts
function longestOnes(nums: number[], k: number): number {
  let ans = 0
  let count = 0
  let left = 0
  let right = 0

  for (right; right < nums.length; right++) {
    count += 1 - nums[right] // 0 - 1 转化
    while (count > k) {
      count -= 1 - nums[left] // 省去写if else
      left++
    }
    ans = Math.max(ans, right - left + 1)
  }

  return ans
}
```

#### Q&A
这题没有太多别的技巧，就是问题转化，使用加减法替代if else，这样代码更简洁
