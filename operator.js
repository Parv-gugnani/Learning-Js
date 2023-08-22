/*
Arithmetic Operators:
Addition (+): Adds two numbers together.

javascript

let result = 5 + 3; // result will be 8
Subtraction (-): Subtracts the right operand from the left operand.

javascript

let result = 8 - 3; // result will be 5
Multiplication (*): Multiplies two numbers together.

javascript

let result = 4 * 3; // result will be 12
Division (/): Divides the left operand by the right operand.

javascript

let result = 15 / 3; // result will be 5
Modulus (%): Returns the remainder of the division of the left operand by the right operand.

javascript

let result = 15 % 4; // result will be 3
Assignment Operators:
Assignment (=): Assigns a value to a variable.

javascript

let x = 10;
Addition Assignment (+=): Adds the right operand to the left operand and assigns the result to the left operand.

javascript

let x = 5;
x += 3; // x is now 8
Comparison Operators:
Equal (==): Checks if two values are equal (type coercion may occur).

javascript

5 == '5'; // true
Strict Equal (===): Checks if two values are equal without type coercion.

javascript

5 === '5'; // false
Not Equal (!=) and Not Strict Not Equal (!==): Check for inequality (with or without type coercion).

javascript

5 != '5';   // false
5 !== '5';  // true
Greater Than (>), Less Than (<), Greater Than or Equal To (>=), Less Than or Equal To (<=): Compare values.

javascript

5 > 3;  // true
3 < 2;  // false
4 >= 4; // true
2 <= 1; // false
Logical Operators:
AND (&&), OR (||), NOT (!): Used for logical operations.
javascript

true && false;  // false
true || false;  // true
!true;          // false
Ternary (Conditional) Operator:
Ternary (?:): Allows you to assign a value to a variable based on a condition.
javascript

let age = 18;
let status = (age >= 18) ? 'Adult' : 'Minor';
Bitwise Operators (Advanced):
Bitwise AND (&), Bitwise OR (|), Bitwise XOR (^), Bitwise NOT (~), Left Shift (<<), Right Shift (>>), Zero-fill Right Shift (>>>): Used to manipulate bits at a binary level.
These are the fundamental operators in JavaScript. As you become more proficient in JavaScript, you may also encounter other operators and methods for working with specific data types (e.g., string concatenation, array methods, object property access), but understanding these basic operators is essential for getting started.



Conditional (Ternary) Operator:
The ternary operator is a shorthand way of writing conditional statements. It evaluates a condition and returns one of two values based on whether the condition is true or false.

javascript

let age = 18;
let status = (age >= 18) ? 'Adult' : 'Minor';
Logical Operators:
Logical operators are used to combine or manipulate boolean values.

Logical AND (&&): Returns true if both operands are true.

javascript

true && false;  // false
Logical OR (||): Returns true if at least one operand is true.

javascript

true || false;  // true
Logical NOT (!): Negates a boolean value.

javascript

!true;  // false
Bitwise Operators (Advanced):
Bitwise operators work at the binary level and are used for low-level bit manipulation. They are rarely used in everyday programming but are essential in certain situations.

Bitwise AND (&): Performs a bitwise AND operation.
Bitwise OR (|): Performs a bitwise OR operation.
Bitwise XOR (^): Performs a bitwise XOR (exclusive OR) operation.
Bitwise NOT (~): Inverts all the bits of a number.
Left Shift (<<): Shifts the bits to the left by a specified number of positions.
Right Shift (>>): Shifts the bits to the right by a specified number of positions.
Zero-fill Right Shift (>>>): Shifts the bits to the right, filling the leftmost positions with zeros.
Type Operators:
typeof: Returns a string indicating the type of a variable or expression.

javascript

typeof 42;          // "number"
typeof "Hello";     // "string"
typeof true;        // "boolean"
instanceof: Tests if an object is an instance of a particular constructor.

javascript

let arr = [1, 2, 3];
arr instanceof Array;   // true
Spread and Rest Operators (ES6):
Spread Operator (...): Used to split an array or object into individual elements.

javascript

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
Rest Operator (...): Used to collect multiple arguments into a single array parameter in functions.

javascript

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum(1, 2, 3, 4); // 10
Nullish Coalescing Operator (ES11):
The nullish coalescing operator (??) provides a way to handle default values for null or undefined values.

javascript

let value = null;
let defaultValue = 'Hello, World!';
let result = value ?? defaultValue; // 'Hello, World!'
These are some of the more advanced operators and concepts in JavaScript. As you become more familiar with JavaScript, you'll find these operators useful in various programming scenarios.
*/

/**
 * Operator for the Begginers
 * will help you to learn the basic
 */
