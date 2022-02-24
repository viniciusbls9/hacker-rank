'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

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

  console.log(minSum + " " + maxSum)
}

function main() {

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  miniMaxSum(arr);
}
