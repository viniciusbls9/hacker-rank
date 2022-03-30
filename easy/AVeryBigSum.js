function aVeryBigSum(ar) {
    let loopSum = 0
    for (var i = 0; i < ar.length; i++) {
        loopSum += ar[i];
    }

    return loopSum
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))
