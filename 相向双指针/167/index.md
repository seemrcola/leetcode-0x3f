给你一个下标从 1 开始的整数数组 numbers ，该数组已按 非递减顺序排列  ，请你从数组中找出满足相加之和等于目标数 target 的两个数。如果设这两个数分别是 numbers[index1] 和 numbers[index2] ，则 1 <= index1 < index2 <= numbers.length 。

以长度为 2 的整数数组 [index1, index2] 的形式返回这两个整数的下标 index1 和 index2。

你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。

你所设计的解决方案必须只使用常量级的额外空间。

示例 1：

输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。

#### 思路整理
1. 头尾指针
2. 如果两数和大于target，右指针左移，反之左指针右移
3. 由于题目保证有唯一解，所以不需要考虑重复的情况，切while循环可以直接while(true)

```ts
function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1

  while (true) {
    const adds = numbers[left] + numbers[right]
    if (adds > target)
      right--
    else if (adds < target)
      left++
    else break
  }

  return [left + 1, right + 1]
}
```

#### Q&A
这题比较简单，属于双向双指针入门题，不过有一点需要注意，就是题目中的下标是从1开始的，所以最后返回的时候需要+1

