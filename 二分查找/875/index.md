珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。

示例 1：

输入：piles = [3,6,7,11], h = 8
输出：4

#### 
这题的思路我是看的答案
https://leetcode.cn/problems/koko-eating-bananas/solutions/51963/er-fen-cha-zhao-ding-wei-su-du-by-liweiwei1419/


```ts
function minEatingSpeed(piles: number[], h: number): number {
  // 找到最大速度
  let max = 1
  for (const i of piles)
    max = Math.max(max, i)

  // 二分的左边界
  let left = 1
  // 二分的右边界
  let right = max

  while (left < right) {
    const mid = left + Math.floor((-left + right) / 2)
    if (calc(piles, mid) > h)
      left = mid + 1
    else right = mid
  }

  return left
}

function calc(piles: number[], speed: number): number {
  let sum = 0
  for (const i of piles)
    sum += Math.ceil(i / speed)

  return sum
}
```
