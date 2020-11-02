console.log("array-api");
// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const stringFruits = fruits.join("|");
  console.log(01, stringFruits);
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const arrayFruits = fruits.split(",");
  console.log(02, arrayFruits);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  console.log(array);
  const sortedArray = array.reverse();
  console.log(03, sortedArray);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const splitArray = array.slice(2);
  console.log(array);
  console.log(splitArray);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const score90 = students.find((student) => {
    return student.score === 90;
  });
  console.log(score90);
}

// Q6. make an array of enrolled students
{
  const filterEnrolled = students.filter((student) => student.enrolled);
  console.log(filterEnrolled);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const studentScoreArray = students.map((item) => item.score);
  console.log(studentScoreArray);
}

// Q8. check if there is a student with the score lower than 50
{
  const scoreCheck = students.some((student) => student.score < 50);
  console.log(scoreCheck);
}

// Q9. compute students' average score
{
  console.clear();
  const result = students.reduceRight((prev, curr) => {
    console.log("----------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
  }, 0);
  // const scores = students.reduce((pre, student) => {
  //   return pre + student.score;
  // }, 0);
  // console.log(scores / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const arrayScore = students.map((student) => student.score).join(",");
  console.log(arrayScore);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const arrayScore = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join(",");
  console.log(arrayScore);
}
