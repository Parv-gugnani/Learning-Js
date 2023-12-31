// Function to capture console logs and display them on the page
function captureConsoleOutput() {
  const consoleOutputDiv = document.getElementById("consoleOutput");

  // Save the original console.log function to a variable
  const originalConsoleLog = console.log;

  // Override console.log to capture the output and display it on the page
  console.log = function (...args) {
    // Call the original console.log function to output to the browser's console
    originalConsoleLog.apply(console, args);

    // Create a new paragraph element to display the log message
    const logElement = document.createElement("p");
    logElement.textContent = args.join(" ");

    // Append the log message to the consoleOutputDiv
    consoleOutputDiv.appendChild(logElement);
  };
}

// Call the captureConsoleOutput function to start capturing console logs
captureConsoleOutput();

// Console output
console.log("This is basic Console :");

let message = "Hello world!";
const pi = 3.14159; //float //cant be changed it is truth that why we store in constants
let nname = "John"; //string
let aage = 30; //int
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
// const obj = {
//   data: 42,
//   getData: function () {
//     setTimeout(() => {
//       console.log(this.data);
//     }, 100);
//   },
// };

// obj.getData();

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

// dom manipulation
const paragraph = document.getElementById("myParagraph");

// Change the text content of the paragraph
paragraph.textContent = "This text was modified by JavaScript!";

// Conditional (Ternary) Operator

let age = 25;
let isAdult = age >= 18 ? "Adult" : "Minor";
// we are using  >=  because it is comparing firstly and we dont need to add the bracket
//this is simple and effective
console.log(isAdult);

// Truthy and Falsy Values
let name = "";

// Common falsy values include 0, null, undefined, false, NaN, and an empty string ("").
if (name) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
  //it is same as boolean
}

// loops with array and object

let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

let Parv = { name: "Parv", age: 18, occupation: "berozgar" };
for (let key in Parv) {
  console.log(key + ": " + Parv[key]);
}

// array method
let fut = ["apple", "banana", "orange"];

// Adding elements to the array
fut.push("grape"); // Adds "grape" to the end of the array
fut.unshift("kiwi"); // Adds "kiwi" to the beginning of the array

// Removing elements from the array
fut.pop(); // Removes the last element ("grape") from the array
fut.shift(); // Removes the first element ("kiwi") from the array

// Slicing an array
let slicedFruits = fut.slice(1, 3);
// Returns a new array containing elements at index 1 and 2 ("banana", "orange")

// Mapping an array
let uppercasedFruits = fut.map((fruit) => fruit.toUpperCase());

// Filtering an array
let filteredFruits = fut.filter((fruit) => fruit.length > 5);

console.log(fut);

//Asynchronous Programming
//using callback
// function fetchData(callback) {
//   setTimeout(() => {
//     let data = "some data from he server";
//     callback(data);
//   }, 2000);
// }

// fetchData((data) => {
//   console.log(data);
// });

// // Using Promises
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = "Some data from the server";
//       resolve(data);
//     }, 2000);
//   });
// }

// fetchData().then((data) => {
//   console.log(data);

// // Using async/await
// async function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       let data = "Some data from the server";
//       resolve(data);
//     }, 2000);
//   });
// }

// async function getData() {
//   let data = await fetchData();
//   console.log(data);
// }

// getData();
// Classes and Object-Oriented Programming (OOP)  -->
// class parv {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`hello my name is ${this.name} and i am ${this.age} year old`);
//   }
// }

// const mia = new ("Mia", 30)();
// john.greet();

// inheritance and prototype
// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age);
//     this.grade = grade;
//   }
//   study() {
//     console.log(`${this.name} .is studying`);
//   }
// // }

// const alice = new Student("Alice", 18, 22);
// alice.greet();
// alice.study();

// closures
function outer() {
  let outerVar = "I am From The Function";

  function inner() {
    console.log(outerVar);
  }
  return inner;
}

const innerFunction = outer();
innerFunction();

console.log(add(3, 5));

// error handling

try {
  // Code that might throw an error
  let result = 10 / 0;
} catch (error) {
  console.error("An error occurred:", error);
}

// LocalStorage and SessionStorage
localStorage.setItem("username", "john_doe");

// Retrieving data from LocalStorage
let username = localStorage.getItem("username");

// Removing data from LocalStorage
localStorage.removeItem("username");

// Using Fetch API to make a GET request
// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

// Event delegation example
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("button")) {
    // Handle button click
    // this is used to change icon like i click on button and you want to change it
  }
});

//Asynchronous Programming Patterns
fs.readFile("file1.txt", (err, data1) => {
  if (err) {
    console.error(err);
  } else {
    fs.readFile("file2.txt", (err, data2) => {
      if (err) {
        console.error(err);
      } else {
        // Process data1 and data2
      }
    });
  }
});

//
function readFileAsync(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync("file1.txt")
  .then((data1) => readFileAsync("file2.txt"))
  .then((data2) => {
    // Process data1 and data2
  })
  .catch((err) => console.error(err));

//
async function readFiles() {
  try {
    const data1 = await readFileAsync("file1.txt");
    const data2 = await readFileAsync("file2.txt");
    // Process data1 and data2
  } catch (err) {
    console.error(err);
  }
}

readFiles();

// Modules and Module Systems
export function add(a, b) {
  return a + b;
}

//This keyword

const parvg = {
  name: "parvg",
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

parvg.greet();

/**In a global context, this refers to the global object (e.g., window in browsers).
In an object method, this refers to the object itself.
In an event handler or callback function, this may have a different context.
You can also explicitly bind this using functions like bind, call, or apply. */

// AJAX and Fetch
// fetch("https://api.example.com/data")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));
