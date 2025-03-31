function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }
// students is an array
let students = [];
// loop through numbersOfStudents
let i = 0;
while (i < numbersOfStudents) {
  // push studentSeat to students
  students.push(studentSeat(i + 1));
  i++;
  }
  // each return is closure saved and can be used later
  return students;
}
// closure with 10 students
const classRoom = createClassRoom(10);
