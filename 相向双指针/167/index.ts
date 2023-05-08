export function twoSum(numbers: number[], target: number): number[] {
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
