给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。


#### 思路整理
1. 首先我们需要用一个哈希表来存放当前的字符，并且声明好左右指针
2. 存放之前我们需要判断当前的字符是否已经存在于哈希表中
3. 如果存在，则从左指针开始删
4. 删完之后检查当前字符是否依然存在哈希表中
5. 重复45直到不存在为止
6. 将当前字符放入哈希表
7. math.max

```ts
function lengthOfLongestSubstring(s: string): number {
  const map = new Map()

  let ans = 0
  let left = 0
  let right = 0

  for (right; right < s.length; right++) {
    const cur = s[right]

    while (map.has(cur)) {
      map.delete(s[left])
      left++
    }

    map.set(cur, true)
    ans = Math.max(ans, map.size)
  }

  return ans
}
```
