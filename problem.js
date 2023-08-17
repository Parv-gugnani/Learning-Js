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
