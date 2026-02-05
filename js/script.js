// npm(node package manager) i(install) -g(global) nodemon(global package)


// console.log('Hello, World!');
// console.log(10+20);
// let a = 20;
// let b = 50;
// console.log(a + b);
// console.log(40+20);
// let const var - variable declaration
// let - block scope variable declaration
// const - block scope constant declaration
// var - function scope variable declaration
//console.log(a);

// var is risky to use because it can be redeclared and updated, which can lead to unexpected behavior in larger codebases. It also has function scope, which can cause issues with variable hoisting and can lead to bugs if not used carefully. It's generally recommended to use let and const for variable declarations in modern JavaScript development to avoid these issues.

// let is used for variables that can be reassigned,

// while const is used for variables that should not be reassigned. Using const can help prevent accidental reassignment of variables and can make your code more predictable and easier to debug. It's a good practice to use const by default and only use let when you know that the variable will need to be reassigned later in the code.

// //const
// const _a1 = 10;
// const $b1 = 20;
// console.log(_a1 + $b1);

// // let
// let a = 10;
// let b = 20;
// console.log(a + b); 

// let a1 = true;
// let b1 = 10.88;
// console.log(a1);
// console.log(b1);

// console.log(_a1 ** $b1);

// a += 10; // _a1 = _a1 + 10
// a -= 5; // _a1 = _a1 - 5
// console.log(a);

// //Logical Operators
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(true || false); // true
// console.log(true && false); // false
// console.log(!true); // false
// console.log(!false); // true

// console.log(!0); // true
// console.log(!1); // false
// console.log(!""); // true
// console.log(!"Hello"); // false

// conditional statements

if (10 > 5) {
    console.log("10 is greater than 5");
} else {
    console.log("10 is not greater than 5");
}
console.log("This line is always executed");

// Nested if-else expample of max in 3 numbers
let num1 = 10;
let num2 = 20;
let num3 = 35;

if (num1 > num2) {
    if (num1 > num3) {
        console.log("num1 is the greatest");
    } else {
        console.log("num3 is the greatest");
    }
} 
else if (num2 > num3) {
        console.log("num2 is the greatest");
}
else {
    console.log("num3 is the greatest");
}

//Swap two numbers
let a = 10;
let b = 20;
console.log("Before swapping: a =", a, "b =", b);
a=(a+b)-(b=a);
console.log("After swapping again: a =", a, "b =", b);

//Switch case example
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

console.log("Types of loops");
console.log("Entry condition controlled loops");
console.log("1. for loop");
console.log("2. while loop");
console.log("Exit condition controlled loops");
console.log("3. do-while loop");

for (let i = 1; i <= 5; i++) {
    console.log("For Loop Iteration:", i);
}
while (true) {
    console.log("Inside While Loop");
    break;
}
let j = 10;
do { // execute at least once
     // continue and break statements
    if (j === 7) {
        j--;
        continue;
    }
    console.log("Do-While Loop Iteration:", j);
    j--;
} while (j >= 5);

console.log("ternary operator");
let age = 18;
let isAdult = (age >= 18) ? "Yes" : "No";
console.log("Is the person an adult?", isAdult);


// grade calculation using if-else ladder
// under 100 marks
// <90 E
// <80 A+
// <70 A
// <40 B
// <25 C
// <25> D dicard

//Q2: leap year calculation
//Q3: find the largest of 4 numbers