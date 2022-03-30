function gradingStudents(grades) {
  for (let index = 0; index < grades.length; index++) {
    if (grades[index] >= 38) {
      const nextMultipleOfFive = Math.ceil(grades[index] / 5) * 5

      const originalGradeLessFinalGrade = nextMultipleOfFive - grades[index]
      if (originalGradeLessFinalGrade < 3) {
        grades[index] = nextMultipleOfFive
      }
    }
  }

  return grades
}

console.log(gradingStudents([73, 67, 38, 33]))
