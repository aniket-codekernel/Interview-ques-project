 //7. Primitives vs reference types: how are they stored and copied?
 //Primitives types means where its stored and all the primitives types is primitives values

 //Primitives types means its give direct value
 let a = "aniket"
 let b = a
 console.log(a,b) //aniket aniket
 b="Dhok"
 console.log(a,b)  //aniket Dhok

 //Reference types means its will addreses of this not a vaue if any thing change in address main will bw change
 let c = {
     a:"anik",
     b:"dhok"
 }
 console.log(c)  //{ a: 'anik', b: 'dhok' }
 let d = c;
 d.a = "Yash"
 d.c = "sanjay"

 console.log(c) //{ a: 'Yash', b: 'dhok', c: 'sanjay' }
 console.log(d) //{ a: 'Yash', b: 'dhok', c: 'sanjay' }
 //All type of reference types is reference value 

//==============================================================================================================================================================================================

 //8. What happens here, and why?
 let a1 = { x: 1 };
 let b1 = a1;
 b1.x = 2;
 console.log(a1.x); //2 because its a refernce types its did not a value it will give a copy a value 

//==============================================================================================================================================================================================

 //9. Shallow copy vs deep copy: how do you make each?



//==============================================================================================================================================================================================

 //10. Are strings mutable?
 //What is Mutable in JavaScript?
 //Mutable means an object or value can be changed or modified after it has been created.

 /*
  * Mutable = Can be changed.
  * Immutable = Cannot be changed.
 */

 let e = "aniket"
 console.log(e) //aniket
 console.log(e[1])  //n
 console.log(e[1]="sadasd") //sadasd  //No its Immutable value cannot be changed it will not give error it ingore silently
 console.log(e)  //aniket

 //==============================================================================================================================================================================================

 //11. What is type coercion? Give implicit and explicit examples.
 // Type coercion means means JavaScript automatically converts one data type into another

 //Implicit
 var f = 2 ;
 var g = "3" ;
 console.log(f + g) //23  Because + have two mode one for add and secn for to number so its no of strin
/*
// In JavaScript, the + operator can perform:
1. Addition (mathematical operation).
2. String concatenation (joining strings). 
*/

 var h =1;
 var i = "1";
 console.log(c-d)   //0 because - have only 1 mode is subtsaction

 console.log("1"+2+3) //123
 console.log(1+2+"3")//32
 //This is all implicty

 //explicit
 //Explicit conversion means YOU manually convert one data type into another using JavaScript methods or functions.
 let j = "100";

 let result = Number(j);

 console.log(result);
 // 100
 // String to Number
 console.log(Number("50")); 

 // Number to String
 console.log(String(100));

 // Number to Boolean
 console.log(Boolean(1));

 // String to Number
 console.log(parseInt("25"));

 // String to Decimal Number
 console.log(parseFloat("25.50"));

//==============================================================================================================================================================================================

//12. Predict the outputs and explain:
                 console.log([] + [])
/*
In JavaScript, the + operator can perform:
1. Addition (mathematical operation).
2. String concatenation (joining strings).
*/

/*
Step 1
 *its convert array to string 
 *first and second also
*/

console.log("" + "") // ""
//That why it will give empty string

                    console.log([] + {})

/*
step 1
console.log([]) //[]  Empty array
console.log({})  //{} Empty object
*/


//Step 2
console.log(String({})) //[object Object]

//step 3
console.log("" + String({})) //[object Object]


                      console.log(true + 1) //2
//because true has 1 value and false has 0 value

                    console.log("3" * "4")      //12
//because  + have only this property to String concatenation

                    console.log(null + 1)  //1
//because  null is a false value its a 0 yherfore 0 +1 =1

                    console.log(undefined + 1) //1
////because  undefined is a false value its a 0 therfore 0 +1 =1

//==============================================================================================================================================================================================

//13. List all falsy values in JS.
//1.false 2.0 3.-0 4."" 5.null 6.undefined 7.NaN 8.n(Bignit)

//==============================================================================================================================================================================================

//14. Why is 0.1 + 0.2 !== 0.3, and how do you compare safely?
console.log(0.1 + 0.2) //0.30000000000000004
console.log(0.3)        //0.3
//Why? Because JavaScript uses IEEE 754 Double-Precision Floating-Point to represent numbers.

/* 
What is IEEE 754?
IEEE 754 is an international standard that defines how computers represent and perform calculations with floating-point numbers (decimal numbers).

In simple words:
IEEE 754 tells computers how to store decimal numbers in binary (0s and 1s).
JavaScript uses IEEE 754 Double-Precision (64-bit) to represent its regular Number values.

1. Why do we need IEEE 754?
Computers understand binary numbers:
- 0
- 1
But humans use decimal numbers:
- 0.1
- 0.2
- 0.3
- 10.5
IEEE 754 provides a standard way to represent these numbers inside computers.

2. How does IEEE 754 work?
A 64-bit floating-point number is divided into three parts:
Part	Bits	Purpose
Sign	1 bit	Positive or negative
Exponent	11 bits	Represents the scale of the number
Fraction (Mantissa)	52 bits	Represents the significant digits
Total:
1 + 11 + 52 = 64 bits

3. Why does 0.1 + 0.2 give an unexpected result?
Consider:
console.log(0.1 + 0.2);
Output:
0.30000000000000004
Reason:
1. JavaScript converts numbers into binary representation.
2. Some decimal fractions cannot be represented exactly in binary.
3. The computer stores the closest representable values.
4. When adding them, a tiny precision error occurs.
Therefore:
0.1 + 0.2 !== 0.3
// true

                         //How do you compare floating-point numbers safely in JavaScript?
                         When comparing decimal numbers, avoid using === or !== directly because of floating-point precision errors.
                         Instead, use Math.abs() with a tolerance (epsilon).

*/
console.log(
    Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON
);
/*
//Understand the code
//Step 1: Subtract the numbers
(0.1 + 0.2) - 0.3
0.0000000000000000555...

Step 2: Use Math.abs()
Math.abs(0.0000000000000000555)

Math.abs() returns the absolute (non-negative) value.

Step 3: Compare with Number.EPSILON
difference < Number.EPSILON

If the difference is smaller than the allowed tolerance, we consider the numbers approximately equal.

function areEqual(a, b, tolerance = 1e-10) {
    return Math.abs(a - b) < tolerance;
}

console.log(areEqual(0.1 + 0.2, 0.3));
console.log(areEqual(10.5, 10.5));
console.log(areEqual(10.5, 10.6));
*/

//==============================================================================================================================================================================================

//15. What is NaN? How do you check for it?
//NaN ("Not a Number")
console.log(typeof NaN); //number
console.log(typeof 0/0); //nan
console.log(NaN === NaN); //false
console.log(Number.isNaN(NaN)); //right way to check nan

//==============================================================================================================================================================================================

//16. Number.isNaN() vs isNaN(): what’s the difference?
console.log(isNaN(NaN))  //true
console.log(Number.isNaN(NaN)) //
/*
//JavaScript: Number.isNaN() vs isNaN()
Both methods are used to check whether a value is NaN (Not-a-Number).

However, the main difference is that isNaN() performs type conversion, whereas Number.isNaN() does not.
1. What is NaN?
NaN means Not-a-Number.

It represents an invalid numerical result.

Example:
console.log("hello" / 2);
2. Understanding isNaN()
isNaN() is a global JavaScript function.

It first converts the given value into a number and then checks whether the result is NaN.

Example:
console.log(isNaN("hello"));  //true
console.log(isNaN("123"));    //false
console.log(isNaN(123));      //false
console.log(isNaN(" "));      //false

3. Understanding Number.isNaN()
Number.isNaN() is a method of the JavaScript Number object.

It checks whether the given value is actually the numeric value NaN.

It does not perform type conversion.

Example:
console.log(Number.isNaN("hello")); //false
console.log(Number.isNaN("123")); //false
console.log(Number.isNaN(123));  //false
console.log(Number.isNaN(NaN));  //true

*/

//==============================================================================================================================================================================================

//17. What is BigInt and why does it exist?
//Its is user that very long decimal number that number never end 
console.log(1 / 3);  //0.3333333333333333 if we check its it never end 
let h = 147747845154874514n
console.log(typeof h) //bigint

//==============================================================================================================================================================================================

//18. What is Symbol used for?
//Symbole is used for give a uniue id to a value that is we cant see
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2); // false — always unique

//==============================================================================================================================================================================================

//19. typeof an undeclared variable vs accessing it directly?
console.log(typeof x) //undefined

//console.log(typeof z) //ReferenceError: Cannot access 'z' before initialization
let z;

//==============================================================================================================================================================================================

//20. What are wrapper objects?
let u = "hello";
console.log(u.toUpperCase()); // "HELLO"
// JS secretly does: new String(s).toUpperCase(), then discards the wrapper

//==============================================================================================================================================================================================

//21. What is the difference between Object.is() and ===?
//1. Understanding === (Strict Equality)
//The strict equality operator checks whether two values are equal without performing type conversion.
console.log(10 === 10);  //True
console.log(10 === "10"); //False
console.log(true === 1); //False
/*
Why?
- 10 === 10 → Same value and type.
- 10 === "10" → Number and string are different types.
- true === 1 → Boolean and number are different types.
*/

//2. Understanding Object.is()
//Object.is() also compares two values without type conversion.
console.log(Object.is(10, 10)); //True
console.log(Object.is(10, "10")); //False
console.log(Object.is(true, 1)); //False
/*
So far, both methods behave the same.
But here comes the interesting part!
*/

//3. Main difference: NaN
console.log(NaN === NaN);  //false
console.log(Object.is(NaN, NaN)); //true

/*
Why?
Normally, JavaScript considers NaN unequal to every value, including itself.
But Object.is() treats NaN as equal to itself.
*/

//4. Main difference: +0 and -0
/*
JavaScript has two different zero representations:
- +0 → Positive zero.
- -0 → Negative zero.
*/
console.log(+0 === -0);  // true 
console.log(Object.is(+0, -0));  //false

/*
/*
================================================================================================
                         === vs Object.is() in JavaScript
================================================================================================

| Comparison          | ===     | Object.is() |
|---------------------|---------|-------------|
| 10, 10              | true    | true        |
| 10, "10"            | false   | false       |
| true, 1             | false   | false       |
| NaN, NaN             | false   | true        |
| +0, -0              | true    | false       |
| "hello", "hello"    | true    | true        |
| null, undefined     | false   | false       |

------------------------------------------------------------------------------------------------
IMPORTANT DIFFERENCES:

1. === (Strict Equality)
   - Compares values without type conversion.
   - NaN is not equal to NaN.
   - +0 and -0 are considered equal.

2. Object.is()
   - Compares values without type conversion.
   - NaN is equal to NaN.
   - +0 and -0 are considered different.

------------------------------------------------------------------------------------------------
QUICK REVISION:

   NaN === NaN          // false
   Object.is(NaN, NaN)  // true

   +0 === -0            // true
   Object.is(+0, -0)    // false

================================================================================================
*/
/*
6. When should you use them?
Use === when:
- Comparing normal values.
- Checking variables and conditions.
- Writing everyday JavaScript applications.
Use Object.is() when:
- You need NaN to equal itself.
- You need to distinguish between +0 and -0.
- You need the specific equality semantics it provides.
*/

//==============================================================================================================================================================================================

// 22. Is JS statically or dynamically typed? Strongly or weakly?
/*
1. Static Typing vs Dynamic Typing
A. Statically Typed Language
In a statically typed language, variable types are determined and checked before the program runs (typically at compile time).

//java
int age = 21;
age = "hello"; // Compilation error
//Because age is declared as an integer, and Java does not allow assigning a string to it.
*/
/*
B. Dynamically Typed Language
In a dynamically typed language, the type belongs to the value, and a variable can hold values of different types during execution.

Example: JavaScript
let age = 21;

console.log(typeof age);
// number

age = "hello";

console.log(typeof age);
// string

age = true;

console.log(typeof age);
// boolean

Why?

Because JavaScript allows the same variable to hold different types of values.

*/
/*
2. Strongly Typed vs Weakly Typed
A strongly typed language generally restricts operations between incompatible types unless you explicitly convert them.
Example: Python
age = 21;
name = "Aniket";
print(age + name)

Output:
typeerror

Why?
Python does not automatically convert the integer into a string for this operation.
*/
/*
//B. Weakly Typed Language
A weakly typed language allows more implicit type conversions (type coercion) between different types.
Example: JavaScript

let age = 21;
let name = "Aniket";
console.log(age + name); //"21Aniket"

Why?
JavaScript automatically converts the number 21 into the string "21" and joins both strings.
This is called Implicit Type Conversion (Type Coercion).
*/



