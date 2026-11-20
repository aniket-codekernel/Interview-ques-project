//1. Write a program that takes two numbers and prints the result of all arithmetic operators.

//let a = Number(prompt("Enter a First number for all arithmetic operation"))

// let b = Number(prompt("Enter a Second number for all arithmetic operation"))

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a % b)
// console.log(a ** b)
// console.log(a + b)

//2. Check whether a number is even or odd using %, then rewrite it using the bitwise & operator.
// let a = Number(prompt("Enter a number to find its odd or even"))

// if (a%2==0)  {
//     console.log("This is a odd number:",a)
// } else {
//     console.log("This is a even number:",a)
// }

//3. Swap two variables without a third variable, in two ways: destructuring and arithmetic.
// //destructuring
// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a); // 20
// console.log(b); // 10

//Arithmetic
// let a = 10;
// let b = 20;

// a = a + b
// b = a - b
// a = a - b

// console.log(a)
// console.log(b)

//4. 
//Find the largest of three numbers using only the ternary operator.
let a = 10;
let b = 25;
let c = 15;

let largest = a > b
    ? (a > c ? a : c)
    : (b > c ? b : c);

console.log("Largest number:", largest);









