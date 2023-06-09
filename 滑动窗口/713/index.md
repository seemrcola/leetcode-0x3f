给你一个整数数组 `nums` 和一个整数 `k` ，请你返回子数组内所有元素的乘积严格**小于** `k` 的连续子数组的数目。

输入：nums = [10,5,2,6], k = 100
输出：8
解释：8 个乘积小于 100 的子数组分别为：[10]、[5]、[2],、[6]、[10,5]、[5,2]、[2,6]、[5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于 100 的子数组。

提示: 
1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106

#### 思路整理

1. 首先我们明确要获取所有的连续子数组
   - 首先是连续，其次是字数组
   - 设左端点为i，右端点为j，那么我们需要获取的子数组范围为[i, j]，一共有 j - i + 1 种情况
2. 我们需要一个变量来记录当前的乘积
3. 我们需要指针来记录我们子数组的初末位置

```ts
function numSubarrayProductLessThanK(nums: number[], k: number): number {
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
```

#### Q&A
1. 为什么要判断 k <= 1 ？
    - 因为k <= 1时，乘积必然小于k，所以直接返回0
2. 如何推出 j - i + 1 ？
    - 设左端点为i，右端点为j，那么我们需要获取的子数组范围为[i, j]，一共有 j - i + 1 种情况:  
    - [j] [j, j-1] [j, j-1, j-2] ... [j, j-1, j-2, ... , i]
    - **每一个都必须与j相关**
3. 为什么ans += j - i + 1呢 ？
    - 因为我们需要获取的是所有的子数组，所以每次都需要加上当前的子数组的个数。举个例子：
    - [1, 2, 3] [1, 2]时，我们需要获取的是[1, 2]和[2]，而不是获取`[1]` [2] [1, 2]
    - 就像我们上面说的，每一个都必须与j相关，这样才避免重复
