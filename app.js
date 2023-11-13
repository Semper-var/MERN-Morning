// Example with 'let'
let countLet = 0;
if (true) {
  let countLet = 1; // This creates a new variable 'countLet' within the block scope.
  console.log("Inside block:", countLet); // Output: Inside block: 1
}
console.log("Outside block:", countLet); // Output: Outside block: 0

// Example with 'var'
var countVar = 0;
if (true) {
  var countVar = 1; // This reassigns the existing 'countVar' variable within the function scope.
  console.log("Inside block:", countVar); // Output: Inside block: 1
}
console.log("Outside block:", countVar); // Output: Outside block: 1


// Primitive data types in JS
let stringType = "Hello, world!";
let numberType = 42;
let booleanType = true;
let nullType = null;
let undefinedType = undefined;

// Arithmetic and logical operators
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;

let logicalAnd = true && false;
let logicalOr = true || false;
let logicalNot = !true;

// Operator precedence
let result = 2 + 3 * 4; // multiplication has higher precedence than addition

// Statement vs expression in JS
// Statement: A complete line of code that performs an action.
let statementExample = console.log("I am a statement");

// Expression: A piece of code that produces a value.
let expressionExample = 2 + 3;

// Template strings
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;

// if/else statement, switch statement, ternary operator
let number = 5;

if (number > 0) {
  console.log("Positive number");
} else if (number < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

switch (number) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  default:
    console.log("Other");
}

let isPositive = number > 0 ? true : false;

// Type conversion and coercion
let numString = "42";
let num = Number(numString);

// Truthy vs falsy values
let truthyValue = "I am truthy"; // truthy
let falsyValue = ""; // falsy

// == vs ===
console.log(5 == "5"); // true (equality with type coercion)
console.log(5 === "5"); // false (strict equality)

// Short circuiting
let shortCircuitExample = true || console.log("This won't be logged");