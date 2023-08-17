console.log("This is Problem Solving Script: --------->");
/*
Declare a variable called 'message' and assign the string "Hello, world!" to it. 
Then, use 'console.log' to print the value of 'message' to the console.
*/
var mus = "Hello, world!";

console.log(mus);

/*
Create two variables: 'num1' with a value of 5 and 'num2' with a value of 3. 
Calculate and print the sum of these two numbers using 'console.log'.
*/

num1 = 5;
num2 = 3;

console.log(num1 + num2);

/*
Write a program that checks if a given number is greater than 10. 
If it is, print "Number is greater than 10." Otherwise, print "Number is not greater than 10."
 */

let givenNumber = 15;

if (givenNumber > 10) {
  console.log("Number is greater than 10");
} else {
  console.log("Number is not greater than 10");
}

/*Using a loop, print the numbers from 1 to 5 in the console. */
for (i = 1; i < 6; i++) {
  console.log("this is counting :", i);
}

/* Create a function called 'greet' that takes a name as a parameter and returns 
a greeting message like "Hello, [name]!".
 */

function greet(name) {
  return "Hello, " + name + "!";
}

let greeting = greet("Parv");
console.log(greeting);

/*Create an array called 'colors' with three strings: 
"red", "green", and "blue". Use a loop to print each color in the array.
 */

let colors = ["red", "green", "blue"];
//only mistake i did is used the method of c programing didt used .length
for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/*Write a function called 'calculateSquare' 
that takes a number as a parameter and returns the square of that number.
*/

function calculateSquare(num) {
  return num * num;
}
console.log(calculateSquare(5));

/* Create a program that checks if a given number is positive, negative, or zero. 
Print the appropriate message based on the condition.
*/

let number = 7;

if (number < 0) {
  console.log("Negative");
} else if ((number = 0)) {
  console.log("Equal to zero");
} else {
  console.log("Positive");
}

/**Create an object called 'person' with properties 'name', 'age', and 'gender'.
 * Assign values of your choice to each property.
 */

let person = {
  name: "John",
  age: 30,
  gender: "male",
};

/** Write a function called 'getInitials' that takes a full name as a parameter and
 * returns the initials in uppercase.
 */

function getInitials(fullname) {
  let name = fullName.split(" ");
  let initials = "";
  for (let i = 0; i < name.length; i++) {
    initials += name[i][0].toUpperCase();
  }
  return initials;
}

console.log(initials);
