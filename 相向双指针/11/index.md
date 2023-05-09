给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。

说明：你不能倾斜容器。

示例 1：

输入：[1,8,6,2,5,4,8,3,7]
输出：49 
解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
示例 2：

输入：height = [1,1]
输出：1

提示：

n == height.length
2 <= n <= 105
0 <= height[i] <= 104


#### 思路整理
1. 这题考的就是你有没有做过这道题(笑)【来自copilot的阴阳怪气】
2. 我们准备头尾指针，然后每次移动短的那个指针，因为移动长的指针，面积只会变小，而移动短的指针，面积有可能变大
3. 如果移动发现下一个值比上一个值小，那么就继续移动，直到找到一个比上一个值大的，然后再计算面积

```ts
export function maxArea(height: number[]): number {
  let max = -1

  let start = 0
  let end = height.length - 1

  while (start < end) {
    const waters = Math.min(height[start], height[end]) * (end - start)
    max = Math.max(max, waters)
    if (height[start] > height[end]) {
      while (height[end - 1] <= height[end]) end-- // 小优化一下，如果前面的比后面的小，那么前面的就不用再比较了
      end--
    }

    else {
      while (height[start + 1] <= height[start]) start++ // 小优化一下，如果前面的比后面的小，那么前面的就不用再比较了
      start++
    }
  }

  return max
}
```
