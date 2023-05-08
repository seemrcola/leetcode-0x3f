// 三数之和
export function threeSum(nums: number[]): number[][] {
  let ans: any[] = []
  let len = nums.length

  nums.sort((a, b) => a - b)

  if(nums[0] + nums[1] + nums[2] > 0) return ans
  if(nums[len - 1] + nums[len - 2] + nums[len - 3] < 0) return ans

  for(let i = 0; i< nums.length - 2; i++) {
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
