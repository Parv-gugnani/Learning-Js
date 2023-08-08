let message = "Hello world!";
const pi = 3.14159; //float //cant be changed it is truth that why we store in constants
let name = "John"; //string
let age = 30; //int
let isStudent = true; //boolean
let frut = ["apple", "banana", "orange"]; //array
let purson = { name: "John", age: 30, isStudent: true }; //object

console.log(message);
//output of message var

//Airthmetic poerations
let a = 10;
let b = 5;
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

// conditional variables
let temperature = 25;

if (temperature > 30) {
  console.log("It's hot outside!");
} else if (temperature > 20) {
  console.log("It's warm outside.");
} else {
  console.log("It's cool outside.");
}

// loop
for (i = 1; i <= 5; i++) {
  console.log("This is iteration number" + i);
}

let counter = 0;
while (counter < 5) {
  console.log("Counting: " + counter);
  counter++;
}

// functions

function add(a, b) {
  //these a and b are the parameters which are only used in functions and described their
  return a + b;
}

let result = add(3, 5);
console.log("This is add fucntions:", result);
// strings
let singleQuoteString = "Hello, I am a single-quote string.";
let doubleQuoteString = "Hello, I am a double-quote string.";
let templateLiteral = `Hello, I am a template literal.`;

// use +
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// array
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits.length);

// objects
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};
console.log(person.name);
console.log(person.age);

//by using var.anything we can call the var of the varibale object
//like used here

//Regular function
function sayHello(name) {
  console.log("Hello" + name + "!");
}

sayHello("Parv");

//arrow functions
// Concise Syntax =>  rather than using shit {brackets} we use =>
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));
/* 
Shorter Syntax: Arrow functions have a concise syntax, especially 
useful for simple one-liner functions like in the example.
No Binding of 'this': Arrow functions do not bind their own 
this value. Instead, they lexically bind the this value of 
the enclosing execution context. This behavior can be useful 
when dealing with callbacks and avoiding issues with the this
 keyword in traditional function expressions.
*/
// Using arrow function
const obj = {
  data: 42,
  getData: function () {
    setTimeout(() => {
      console.log(this.data);
    }, 100);
  },
};

obj.getData();

// Scope

let globalVar = "I am global";
function example() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}

example();
console.log(globalVar);

// Event
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  console.log("Button clicked");
});
