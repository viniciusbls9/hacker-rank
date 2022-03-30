function compareTriplets(aliceRating, bobRating) {
    let alicePoint = 0
    let bobPoint = 0
    for (var i = 0; i < aliceRating.length; i++) {
        if (aliceRating[i] > bobRating[i]) {
            alicePoint += 1
        } else if (aliceRating[i] === bobRating[i]) {
            alicePoint += 0
            bobPoint += 0
        } else {
            bobPoint += 1
        }
    }

    return [alicePoint, bobPoint]

}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]))
