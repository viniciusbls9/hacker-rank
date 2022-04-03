function sumArray(arr: number[][], isReverse = false) {
  let arrayPush = [];
  const mapArray = isReverse ? arr.reverse() : arr;

  mapArray.map((arrayItem, index) => {
    arrayPush.push(arrayItem[index]);
  });

  const arraySum = arrayPush.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });

  return arraySum;
}

function diagonalDifference(arr: number[][]): number {
  const sumWithoutReverse = sumArray(arr);
  const sumReverse = sumArray(arr, true);

  return Math.abs(sumReverse - sumWithoutReverse);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
