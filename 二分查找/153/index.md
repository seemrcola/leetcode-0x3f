已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

示例 1：

输入：nums = [3,4,5,1,2]
输出：1
解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。

示例 2：

输入：nums = [4,5,6,7,0,1,2]
输出：0
解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。


#### 思路整理
1. 根据复杂度分析，我们可以使用二分查找
2. 首先确定最后一个元素和它前一个元素的大小关系，如果最后一个元素小于前一个元素，那么最后一个元素就是最小值
图类似如下
｜       *
｜    *
｜ * 
｜             *
｜          *
｜——————————————————————————————————————————
3.实际上就是两个升序数组
4.我们设置左右最小值，根据mid值相对于左右值的大小关系，来确定左右边界
5.代码如下

```ts
function findMin(nums: number[]): number {
  const len = nums.length
  if (nums[len - 1] < nums[len - 2])
    return nums[len - 1]

  let low = 0
  let high = len - 1
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2)
    // 二分的难点往往在于边界处理，这里我们实际上就是找到哪一半是有序的。
    // 此时我们将范围缩小到无序的那一半，因为答案就在那一半。
    if (nums[pivot] < nums[high])
      high = pivot // 根据图谱可知，如果小于high，那么右侧是有序的，所以我们将high设置为pivot，为什么不是pivot-1，因为piovt只能保证后侧的值有序，但是不能保证自身以及前侧的值有序
    else
      low = pivot + 1 // 否则左侧是有序的，所以我们将low设置为pivot+1，为什么+1，因为在有序这边，可以确定不是最小值
  }
  return nums[low]
}
```
