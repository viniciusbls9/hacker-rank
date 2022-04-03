function plusMinus(arr: number[]) {
  const arrayPush = [];
  for (let i = 0; i < arr.length; i++) {
    arrayPush.push(Math.sign(arr[i]));
  }

  const counts: any = {};
  arrayPush.forEach((x) => {
    counts[x] = (counts[x] || 0) + 1;
  });

  const values = [1, -1, 0];
  for (let i = 0; i < values.length; i++) {
    const isNan =
      isNaN(counts[values[i]]) || counts[values[i]] === undefined
        ? 0
        : counts[values[i]];

    const result = isNan / arr.length;
    return result.toFixed(6);
  }
}

console.log(plusMinus([1, 1, 0, -1, -1]));
