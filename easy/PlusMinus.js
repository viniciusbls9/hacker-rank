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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  const arrayPush = []
  for (let i = 0; i < arr.length; i++) {
    arrayPush.push(Math.sign(arr[i]))
  }

  const counts = {};
  arrayPush.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const values = [1, -1, 0]
  for (let i = 0; i < values.length; i++) {

    const isNan = isNaN(counts[values[i]]) || counts[values[i]] === undefined ? 0 : counts[values[i]]

    const result = isNan / arr.length
    console.log(result.toFixed(6))
  }
}

function main() {
  const n = parseInt(readLine().trim(), 10);

  const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  plusMinus(arr);
}
