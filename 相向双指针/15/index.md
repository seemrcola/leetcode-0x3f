给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。
 
示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[ [-1,-1,2],[-1,0,1] ]
解释：
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
注意，输出的顺序和三元组的顺序并不重要。
示例 2：

输入：nums = [0,1,1]
输出：[]
解释：唯一可能的三元组和不为 0 。
示例 3：

输入：nums = [0,0,0]
输出：[ [0,0,0] ]
解释：唯一可能的三元组和为 0 。
 

提示：

3 <= nums.length <= 3000
-105 <= nums[i] <= 105


#### 思路整理
1. 首先我们已经根据167题的思路，实现了一个两数之和的处理
2. 那么我们可以想到，三数之和可以这么做
   - 首先排序数组
   - 根据两数之和的思路，我们可以固定一个数，然后在剩下的数组中，找到两数之和为固定数的相反数的两个数
   - 按需求去重

```ts
// 三数之和
export function threeSum(nums: number[]): number[][] {
  let ans: any[] = []
  let len = nums.length

  nums.sort((a, b) => a - b)

  // 优化部分，如果最小的三个数都大于0，那么就不用继续了
  if(nums[0] + nums[1] + nums[2] > 0) return ans
  // 优化部分，如果最大的三个数都小于0，那么就不用继续了
  if(nums[len - 1] + nums[len - 2] + nums[len - 3] < 0) return ans

  // 记得给start， end留个地方，所以是len - 2
  for(let i = 0; i< len - 2; i++) {
      if(nums[i] === nums[i-1]) continue

      let cur = nums[i]
      let target = 0 - cur

      // 接下来就和 167题 一样了
      let start = i + 1
      let end = nums.length - 1
      while(start < end) {
          let total = nums[start] + nums[end]

          if(total > target) end--
          
          if(total < target) start++

          if(total === target) {
              ans.push([nums[i], nums[start], nums[end]])
              // 直接start++ end--
              start++
              end--
              // 判断一下 现在的start是不是和被push进去的start相等
              while(nums[start-1] === nums[start])
                  start++
              // 判断一下 现在的end是不是和被push进去的end相等
              while(nums[end+1] === nums[end])
                  end--
          } 
      }
  }

 return ans
};
```

#### Q&A
1. 如何去重，为什么nums[i] === nums[i-1]，就要跳过这个nums[i]
   - 当送我们的数组排序之后，我们就可以通过判断nums[i] === nums[i-1]，来判断当前的数是否和上一个数相等，因为靠前的数字已经被遍历过，
   如过靠前的数字和后一个数字相等，那么前一个数字会经历后一个数字的所有情况，所以我们可以跳过这个数字
   - 同理。start和end的情况也需要这样去重。


