// //1. What are the types of operators in JavaScript? Give one example of each.
// // Opercations in JS 
// // 1.Arithmetic Opertors
// console.log("(+)Addition");
// let a = 5;
// let b = 5;
// console.log(a + b); //10

// console.log("(-)Subtraction");
// let c = 9;
// let d = 5;
// console.log(c - d);  // 4

// console.log("(*)Multiplaction");
// let e = 5;
// let f = 5;
// console.log(e * f);  //25

// console.log("(**)Exponentiation");
// let g = 2;
// let h = 3;
// console.log(h ** g);   //9

// console.log("(/)Division");
// let i = 5;
// let j = 5;
// console.log(i / j); //1

// console.log("(%)Modules ");
// let k = 15;
// let l = 4;
// console.log(k % l); //3

// console.log("(v++)Increment");
// let v = 8;
// console.log(v++); //8
// console.log(v);  //9
// console.log("(++v)Increment");
// let w = 10;
// console.log(++w); //11
// console.log(w); //11

// console.log("(x--)Decrement");
// let x = 6;
// console.log(x--); //6
// console.log(x);  //5
// console.log("(--x)Decrement");
// let y = 5;
// console.log(--y);  //4
// console.log(y);     //4

// console.log(5 + "5");    //number ==> string //55
// console.log(5 + 3 + "5"); // 85
// console.log("5" + 3 + 5);  //535

// console.log("6" - 2)   //4
// console.log("6" * "2")  //12
// console.log("10" / "2") //5

console.log(-7 % 3) //-1
console.log(7 % -3) //1

console.log(2 ** 3 ** 2) //// 512, NOT 64
//evaluated as 2 ** (3 ** 2) = 2 ** 9 = 512

console.log(5/0)  //infinity
console.log(-5/0) //-infinity
console.log(0/0) //NaN 


//// 2.Assignment  Operators
console.log("(=) Equal");
let m = 5;
console.log(m); //5
m = 99;
console.log(m);  //99

console.log("(+=)pluse equal");
let n = 36;
n += 4;
console.log(n); //40 

console.log("(-=)SubtractionsEqualTo");
let o = 88;
o -= 8;
console.log(o); //80

console.log("(*=)MulticationEqual");
let p = 9;
p *= 9;
console.log(p); //81

console.log("(/=)DivisonEqual");
let q = 7;
q /= 2;
console.log(q); //3.5

console.log("(/=)DivisonEqual");
let r = 7;
r %= 9;
console.log(r); //7

console.log("(**=)ExponentiationEqual");
let s = 5;
s **= 5;
console.log(s); //3125

// ||=     "If the current value is falsy (empty, zero, null, etc.), replace it. Otherwise, leave it alone."
 let count = 0;
 count ||= 10;
 console.log(count);

 ////  ??=    "If the current value is null or undefined ONLY, replace it. Anything else (even 0 or empty string) stays untouched."
 let user = null;
user ??= "Guest";
console.log(user);
 
// &&=    "If the current value is truthy, replace it. If it's falsy, leave it alone."
let ani = 1;
ani &&= "Aniket"
console.log(ani);




//// 3.Comparison Operators 
//   . (==)EqualTo
console.log("(==)EqualTo");
console.log(2 == 3); //false

//   . (!=)NotEqualTo
console.log("(!=)NotEqualTo");
console.log(3 != 3);    //false
console.log("10" == 10);    //true
console.log(true == 1);    //true
console.log(null == 0);   //false

////   . (===)EqualTO AND TypeAlso
console.log("(===)EqualTO AND TypeAlso");
console.log("55" === true); //false
console.log(55 === 55);  //true 

////    . (!==)NotEqualValue OR NotEqualType 
console.log("(!==)NotEqualValue OR NotEqualType");
console.log(66 !== 55);  //true
console.log("anik" !== 88);//true

console.log("(>)GreaterThan ");
console.log(2 > 3);  //false
console.log(3 > 2); //true

console.log("(<)LessThan");
console.log(9 < 10); //true
console.log(10 < 9);   //false

console.log(">=)GreaterThanEqualTo");
console.log(9 >= 8); //true
console.log(8 >= 9); //false
console.log(8 >= 8); //true

console.log("(<=)LessThanEqualTo");
console.log(9 <= 8);  //true
console.log(7 <= 8);  //false
console.log(10 <= 10);   //true 

//=== Checks types AND Value
//== Check only value

null == undefined   // true  (special case, only true with each other)
null === undefined  // false

NaN == NaN           // false (NaN never equals anything, even itself)
0 == "0"             // true  (string → number)
0 == ""               // true  (empty string → 0)
0 == []               // true  ([] → "" → 0)
"" == []              // true
false == "0"          // true
false == []           // true
false == "false"      // FALSE! ("false" → NaN, false → 0, 0 !== NaN)

"10" > "9"   // false! Compared as STRINGS lexicographically ("1" < "9")
10 > "9"     // true — one operand is a number, so both become numbers


//// 4.Logical Operators 


console.log("4.Logical Operators");
//   . (&&)LogicalAnd 
console.log("(&&)LogicalAnd");
let t = 6;
console.log(t < 7 && t == 6); //true 

//   . (||)LogicalOr
console.log("(||)LogicalOr");
let u = 5;
console.log(u > 4 || u > 6);  //true

//    . (!)LogicalNot 
console.log("(!)LogicalNot");
console.log(!true); //false
console.log(!false); //true

//4. Logical Operators
console.log(0 && "hello");     // 0        (stops at first falsy)
console.log(1 && "hello");     // "hello"  (both truthy, returns last)
console.log(null || "default"); // "default"
console.log("first" || "second"); // "first" (stops at first truthy)
console.log(!!"hello"); 

//====================================================================================================================================

//2. What is the difference between unary, binary and ternary operators?
/*
Unary operators → 1 operand
Binary operators → 2 operands
Ternary operators → 3 operands
*/

//Unary Operators (1 operand)
//Unary operators perform an operation on a single value. Examples include:
/*
Negation (-x)
Increment (++x or x++)
Decrement (--x or x--) 
Logical NOT (!x
*/

//Binary Operators (2 operands)
//Binary operators operate on two values. Common examples:
/*
Arithmetic: +, -, *, /
Assignment: =
Logical: &&, ||
Comparison: ==, >, <
 */

//Ternary Operators (3 operands)
//A ternary operator uses three operands.
//The most common is the conditional operator
//condition ? value_if_true : value_if_false

//============================================================================================================================================

//Difference between == and ===? Between != and !==?
console.log("5" === 5) //=== This is also check Type and value 
console.log("5" == 5)  //== Its only check a vlaue
console.log("5" != 5) //!= Its only check  a value
console.log("5" !== 5) //!== Its also ckeck a value and type also

//============================================================================================================================================

//What is operator precedence? What is associativity?
//1. What is Operator Precedence?
//Operator precedence decides which operator is evaluated first when an expression contains multiple operators.
//Think of it as a priority system.
let result = 10 + 5 * 2;
console.log(result); // 20
/*
Which operation happens first?
- Addition (+)
- Multiplication (*)
Answer: Multiplication happens first.
Because multiplication (*) has higher precedence than addition (+).
*/
/*
10 + (5 * 2)
10 + 10
20
*/

//Example 2: Using parentheses
let result12 = (10 + 5) * 2;
console.log(result12); // 30
//Why 30 instead of 20?
/*
Because parentheses () have higher precedence and force the expression inside them to be evaluated first.
(10 + 5) * 2
15 * 2
30
Remember: Higher precedence = Higher priority.
*/

//2. What is Associativity?
//Associativity decides the direction in which operators are evaluated when they have the same precedence.
/*
There are two types:
1. Left-to-Right
2. Right-to-Left
*/

//A. Left-to-Right Associativity
//Operators are evaluated from left to right.
let result123 = 20 - 5 - 3;
console.log(result123); // 12
/*
Why?
Subtraction has left-to-right associativity.
JavaScript evaluates:
(20 - 5) - 3
15 - 3
12
*/

//B. Right-to-Left Associativity
//Operators are evaluated from right to left.
let result1234 = 2 ** 3 ** 2;
console.log(result1234); // 512
/*
Why?
Exponentiation (**) has right-to-left associativity.
JavaScript evaluates:
2 ** (3 ** 2)
2 ** 9
512
*/

/*
================================================================================================
                  Difference Between Operator Precedence and Associativity
================================================================================================

| Operator Precedence                            | Associativity                                 |
|------------------------------------------------|-----------------------------------------------|
| Decides which operator gets priority.          | Decides the evaluation direction.             |
| Used when operators have different precedence. | Used when operators have the same precedence. |
| Example: 10 + 5 * 2                            | Example: 20 - 5 - 3                           |
| Multiplication happens first.                  | Evaluates left to right.                      |

================================================================================================
*/

//============================================================================================================================================

//c. Difference between || and ???
//  ||=     "If the current value is falsy (empty, zero, null, etc.), replace it. Otherwise, leave it alone."

 let count1 = 0;
 count1 ||= 10;
 console.log(count1); // 10 — because 0 is falsy, so it got replaced

 //  ??=    "If the current value is null or undefined ONLY, replace it. Anything else (even 0 or empty string) stays untouched." 
let user1 = null;
user1 ??= "Guest";
console.log(user1); // "Guest" — was null, so got replaced

//==============================================================================================================================================

//D. What is short-circuit evaluation? Where is it useful?
//1. What is Short-Circuit Evaluation in JavaScript?
//Short-circuit evaluation means JavaScript stops evaluating an expression as soon as the result is already determined.
//JavaScript doesn't always check every condition. If it already knows the final answer, it stops checking.
//There are two main operators used for short-circuit evaluation:

/*
&& (AND)
|| (OR)
*/

//2. Short-Circuit with AND (&&)
//Rule: If the first value is falsy, JavaScript doesn't check the second value.
console.log(false && true);  //false
/*
Why?
- First value is false.
- AND (&&) requires both values to be true.
- Even if the second value is true, the final result cannot be true.
- So JavaScript stops evaluating.
*/

//3. Short-Circuit with OR (||)
//Rule: If the first value is truthy, JavaScript doesn't check the second value.
console.log(true || false); //true
/*
Why?
- First value is true.
- OR (||) requires only one value to be true.
- The final result is already true.
- So JavaScript stops evaluating.
*/

//==============================================================================================================================================

//E. Difference between prefix (++x) and postfix (x++)?
let a = 1;
console.log(a++) //This is will do after a call
console.log(a)

let b = 1;
console.log(++b); //This will do at a time of a call
console.log(b)

//=================================================================================================================================================

//8. What does typeof return for null, an array and a function?
console.log(typeof null) //Object because its historic bug it can fix but not because millons of website working on it

//==================================================================================================================================================

//9. What is the exponent operator **, and how is it different from Math.pow()?
console.log(2 ** 3) // mean 2 power 3 = 2*2*2 = 8
//Math.pow() in JavaScript
//Math.pow() is a built-in JavaScript method used to calculate the power of a number (exponentiation).
console.log(Math.pow(2 , 3)) //8
//Its a feature add in  new version

//==================================================================================================================================================

//What is the difference between % (remainder) and a true modulo for negative numbers?
//1. Remainder (%)
//JavaScript's % operator calculates the remainder using the sign of the dividend (first number).
console.log(10 % 3);   // 1
console.log(-10 % 3);  // -1
console.log(10 % -3);  // 1
console.log(-10 % -3); // -1

//2. True Modulo
//True modulo generally returns a result with the same sign as the divisor (second number).
/*
10 mod 3  = 1
-10 mod 3 = 2
10 mod -3 = -2
-10 mod -3 = -1
*/
//Notice that true modulo and JavaScript remainder can produce different results for negative numbers.

//3. Difference between Remainder and Modulo
/*
================================================================================================
                         Remainder (%) vs True Modulo
================================================================================================

| Remainder (%)                    | True Modulo                         |
|-----------------------------------|-------------------------------------|
| Uses the sign of the dividend.   | Uses the sign of the divisor.       |
| JavaScript supports it directly. | JavaScript has no dedicated modulo operator. |
| Can return a negative result.    | Result follows the divisor's sign. |
| Example: -10 % 3 = -1            | Example: -10 mod 3 = 2              |

================================================================================================
*/
