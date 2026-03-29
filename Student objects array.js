function processStudents() {
  let students = [
    { name: "Amina", age: 20, grade: "F" },
    { name: "Nonye", age: 24, grade: "B" },
    { name: "Big Ben", age: 26, grade: "A" },
    { name: "Big smart", age: 26, grade: "C" },
    { name: "Goerge", age: 20, grade: "D" }
  ];

  // Print information for each student
  console.log("Students:");
  for (let i = 0; i < students.length; i++) {
    console.log(`Name: ${students[i].name}, Age: ${students[i].age}, Grade: ${students[i].grade}`);
  }

  return students;
}
processStudents();