给定一个含有 `n` 个正整数的数组和一个正整数 `target` 。

找出该数组中满足其和 **≥ target** 的长度最小的 连续子数组 `[numsl, numsl+1, ..., numsr-1, numsr]`
返回其长度。如果不存在符合条件的子数组，返回 **0** 。

#### 思路整理

1. 首先暴力算法解决
2. 采取窗口滑动算法
3. 定义左右指针，并且左右指针开始均指向0
4. 定义计算和的变量total，初始值为0
5. 定义返回结果ans，初始值为数组长度+1或者Infinity，总之是一个right不可能达到的值
6. right指针开始向右移动，每次移动都会加上nums[right]的值
7. 当total - nums[left] >= target时，开始移动left指针，每次移动都会减去nums[left]的值
8. 当total >= target时，更新ans的值
9. 当right指针移动到数组末尾时，返回ans的值，如果ans的值没有被更新过，那么返回0


```ts
function minSubArrayLen(target: number, nums: number[]): number {
  let ans = nums.length + 1
  let left = 0
  let right = 0
  let total = 0
  for (right; right < nums.length; right++) {
    total += nums[right]
    while (total - nums[left] >= target) {
      total -= nums[left]
      left += 1
    }
    if (total >= target)
      ans = Math.min(ans, right - left + 1)
  }

  if (ans === nums.length + 1)
    ans = 0
  return ans
}
```

#### Q&A
1. 为什么要定义ans的初始值为数组长度+1或者Infinity？
    - 因为数组中的元素都是正整数，所以ans的值不可能大于数组的长度，所以初始值为数组长度+1或者Infinity
2. 为什么要判断 while(total - nums[left] >= target)，可以写成别的吗？
    - 也可以判断 while(total >= target) ，不过写法要有所更改。
    ```ts
    function minSubArrayLen(target: number, nums: number[]): number {
      let ans = nums.length + 1
      let left = 0
      let right = 0
      let total = 0
      for (right; right < nums.length; right++) {
        total += nums[right]
        while (total >= target) { // 这里要判断total >= target
          ans = Math.min(ans, right - left + 1) // 一旦符合条件就更新ans的值
          total -= nums[left]
          left += 1
        }
      }

      if (ans == nums.length + 1)
        ans = 0
      return ans
    }
    ```



