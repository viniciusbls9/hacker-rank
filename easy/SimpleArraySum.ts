function simpleArraySum(ar: number[]): number {
  let loopSum = 0;
  for (var i = 0; i < ar.length; i++) {
    loopSum += ar[i];
  }

  return loopSum;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
