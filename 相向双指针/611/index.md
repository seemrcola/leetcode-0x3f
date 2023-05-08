给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数。

 

示例 1:

输入: nums = [2,2,3,4]
输出: 3
解释:有效的组合是: 
2,3,4 (使用第一个 2)
2,3,4 (使用第二个 2)
2,2,3
示例 2:

输入: nums = [4,2,3,4]
输出: 4
 

提示:

1 <= nums.length <= 1000
0 <= nums[i] <= 1000

#### 思路整理
这道题我的第一反应就是排序，然后就可以实现`最小值加第二小的值大于最大值`这个组成三角形的思路
```ts
export function triangleNumber(nums: number[]): number {
  let ans = 0
  const len = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      let k = len - 1
      while (j < k) {
        if (nums[i] + nums[j] > nums[k]) {
          ans += (k - j)
          break
        }
        k--
      }
    }
  }

  return ans
}
```
实际一跑发现成绩在百分之20上下。  
看了一下题解: 
```ts
export function triangleNumber(nums: number[]): number {
  let ans = 0
  const len = nums.length
  nums.sort((a, b) => a - b)

  for (let i = 0; i < len - 2; i++) {
    let k = i + 2
    for (let j = i + 1; j < len - 1 && nums[i] !== 0; j++) {
      while (k < len && nums[i] + nums[j] > nums[k])
        k++
      ans += (k - j - 1)
    }
  }

  return ans
}
```
应该是从前往后遍历要比从后往前遍历快一些，但是我觉得这个题解的代码可读性不如我的代码，所以我还是选择了我的代码。【哈哈这句话是copilot自动提示出来的】
