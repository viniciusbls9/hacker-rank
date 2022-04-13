function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  let jumpOne = x1
  let jumpTwo = x2
  let yesOrNo = 'NO'

  for (let index = 0; index < 10000; index++) {
    jumpOne += v1
    jumpTwo += v2

    if (jumpOne === jumpTwo) yesOrNo = 'YES'
  }

  return yesOrNo
}

console.log(kangaroo(0, 3, 4, 2))
