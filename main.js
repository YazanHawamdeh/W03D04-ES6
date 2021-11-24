console.log(arrowTitle);
/* START CODE UNDER THIS LINE */

//practice

//q1
const average = (a, b) => {
  // TODO: Your code here
  return (a + b) / 2;
};

/*  average(20, 25); // => 22.5
  average(15, 7); // => 11 */

//////////////////////////////////////////////////

//q2

const endsWith = (string, character) => {
  // TODO: Your code here
  if (string[string.length - 1].toUpperCase() == character.toUpperCase()) {
    return true;
  }
  return false;
};

/*  endsWith("Hello", "o"); // => true
  endsWith("Hello", "O"); // => true
  endsWith("hellO", "o"); // => true
  endsWith("World", "h"); // => false
  endsWith("World", "a"); // => false
  endsWith("World", "c"); // => false */

///////////////////////////////////////////////////////////////////

//q3
let counter = 3;
const countUp = function () {
  return ++counter;
};

const resetCount = function (start) {
  counter = start;
  return "the count has been reset";
};

/*  resetCount(0); // => "the count has been reset"
  countUp(); // => 1
  resetCount(10); // => "the count has been reset"
  countUp(); // => 11 */

/////////////////////////////////////////////////////////////////////////

//q4

const addToArray = (array, string) => {
  // TODO: Your code here
  array.push(string);
  return array;
};

/* addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
  addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i",  "am", "Jane"] */

///////////////////////////////////////////////////////////////////////////////////

//q5

const createUser = (firstName, lastName) => {
  // TODO: Your code here
  return { firstName: firstName, lastName: lastName };
};

/*   createUser("John", "Doe"); // => {firstName: "John", lastName: "Doe"}
  createUser("Peter", "Brown"); // => {firstName: "Peter", lastName: "Brown"} */

//////////////////////////////////////////////////////////////////////

//q6
const onlyStrings = (array) => {
  // TODO: Your code here
  console.log(
    array.filter((element, index) => {
      return typeof element == "string";
    })
  );
};

/*   onlyStrings([0, 1, "Hello", true, 4, "World", 6]); // => ["Hello", "World"]
  onlyStrings(["John", 87, true, 26, "Doe", false]); // => ["John", "Doe"] */

/////////////////////////////////////////////////////////////////////////

//q7

const convertToArray = (object) => {
  // TODO: Your code here
  let arr = [];
  for (key in object) {
    arr.push(object[key]);
  }
  return arr;
};

/* convertToArray({ 0: "one", 1: "two", 2: "three" }); // => ["one", "two", "three"]
convertToArray({ 1: "two", 0: "one", 2: "three" }); // => ["one", "two", "three"]
convertToArray({ 2: "two", 1: "one", 0: "three" }); // => ["three", "one", "two"] */

/////////////////////////////////////////////////////////////////////////////////////

//q8

const factorial = (number) => {
  // TODO: Your code here
  let answer = 1;
  if (number == 0 || number == 1) {
    return answer;
  } else {
    for (var i = number; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
};

/*  factorial(5); // 1 * 2 * 3 * 4 * 5 => 120
  factorial(3); // 1 * 2 * 3 => 6
  factorial(1); // => 1
  factorial(0); // => 1 */

////////////////////////////////////////////////////////////////////////////////////////

//q9

// Make sure to use the correct higher order function
const averageGrade = function (grades) {
  // TODO: Your code here
  if (!grades.length) {
    return "Please enter at least one grade";
  }
  const avg = grades.reduce((acc, number, index) => {
    return acc + number;
  });
  return avg / grades.length;
};

/* averageGrade([100, 80, 95, 67, 74]); // => 83.2
averageGrade([100, 90, 80, 70]); // => 85
averageGrade([]); // => "Please enter at least one grade" */
