function miniMaxSum(arr) {
  let max = arr[0]
  let min = arr[0]
  let sum = 0

  for (let index = 0; index < 5; index++) {
    if (max < arr[index]) {
      max = arr[index]
    }
    if (min > arr[index]) {
      min = arr[index]
    }
    sum += arr[index]
  }

  let maxSum = sum - min
  let minSum = sum - max

  return minSum + " " + maxSum
}

console.log(miniMaxSum([1, 2, 3, 4, 5]))
