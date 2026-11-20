//1.
/*
console.log([] + []); 
console.log([].toString())  //""
console.log([].toString())  //""
console.log("" + "") //""
*/

//2
/*
console.log([] + {}); //[object Object]
console.log([].toString()) //""
console.log({}.toString()) //[object Object]
console.log("" + {}) //[object Object]
*/

//3
// console.log("b" + "a" + +"a" + "a"); 
console.log(+"a") //NaN
//Because "a" cannot be converted into a valid number.
//Replace +"a" with NaN
"b" + "a" + NaN + "a"
console.log("b" + "a" + +"a" + "a");  //banana

//4
console.log(0.1 + 0.2 === 0.3);
//javaScript uses IEEE 754 double-precision floating-point numbers to represent numbers.
//Some decimal fractions, such as 0.1 and 0.2, cannot be represented exactly in binary.

//5
console.log(10 > 9 > 8);  //False 
/*
Why
((10 > 9) > 8)
(True > 8)
(1 > 8) 
//false
*/
console.log(10 > 9 && 9 > 8); // true

//6
console.log("2" > "12");  //false
/*
Step 1: Understand the operands
Both values are strings:
"2"  // String
"12" // String

Step 2: Understand JavaScript's comparison rule
When both operands are strings, JavaScript compares them lexicographically (character by character using their Unicode values).
It does NOT convert them into numbers.

Step 3: Compare the first characters
"2" > "1"
Unicode values:
- "2" = 50
- "1" = 49
Since 50 > 49, the comparison is true.

JavaScript doesn't need to compare any further characters


Interview takeaway
Rule:
1. Both operands are strings → Lexicographical comparison.
2. One or both operands are not strings → Usually numeric comparison after type conversion.
*/


//7
console.log(2 > "12");// true
console.log(2 > 12); // true

//8
console.log(null + 1, undefined + 1);
console.log(0 + 1 , NaN + 1)
//Interview rule: undefined converts to NaN during numeric conversion.

//9
console.log(true && "hi" && 0 && "bye");
console.log(Boolean(true)) //true
console.log(Boolean("hi")) //true
console.log(Boolean(0)) //false
/*
Remember these rules
Logical AND (&&)
- Returns the first falsy value.
- If all values are truthy, returns the last value.
Logical OR (||)
- Returns the first truthy value.
- If all values are falsy, returns the last value.
 */

//10
console.log(false || null || "fallback"); //fallback
console.log(Boolean(false)) //false
console.log(Boolean(null)) //false
console.log(Boolean("fallback"))  //true

//11
console.log(-5 % 3, 5 % -3); //-2 //-

//12
console.log(+"", +" ", +"abc", +true);  //before + operator convert every thing to number
0 +0 +NaN+ 1 //00nan1

//13
let i = 2 ;
console.log(i++ + i++ * ++i);
//2 + 2 * 3
//4 *3
//12

//14
console.log(typeof (1 / 0), typeof (typeof 1));  //NaN    "number" "string"
console.log( (typeof 1)) //"number"
console.log(typeof ("number")) //"string"

//15
console.log(1 == "1", 0 == "", "0" == false, [] == false, null == 0);
//True,true,true,true ,false

//16
console.log(5 > 3 ? "yes" : 2 > 1 ? "maybe" : "no"); //yes







