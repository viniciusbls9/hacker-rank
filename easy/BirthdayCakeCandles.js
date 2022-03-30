function birthdayCakeCandles(candles) {
  const candlesObject = {};
  candles.forEach((x) => {
    candlesObject[x] = (candlesObject[x] || 0) + 1;
  });

  const candlesObjectValues = Object.values(candlesObject)

  return Math.max(...candlesObjectValues)
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))
