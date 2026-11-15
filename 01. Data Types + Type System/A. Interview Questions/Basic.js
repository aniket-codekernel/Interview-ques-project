//1. What are the primitive data types in JS?
//string, number, boolean, undefined, null, symbol, bigint.
let a = "String";
console.log(typeof a)

let b = 12345;
console.log(typeof b)

let c = false;
console.log(typeof c)

let d ;
console.log(typeof d)

let e = null;
console.log(typeof e)

let f = Symbol();
console.log(typeof f)

let g = 12345n
console.log(typeof g)
//==============================================================================================================================================================================================

//2. What is the difference between null and undefined?
console.log(typeof null)
console.log(typeof undefined)
//null means value is not 0 there is nothing nothing no value
//undefined means value is not defined means value is not given to variable

////==============================================================================================================================================================================================

//3. Why does typeof null return "object"?
console.log(typeof null)  //object
//typeof null give us object because its a histroic bug that can fig but millon of website working on it if we fig that bug website will stop working

////==============================================================================================================================================================================================

//4. What does typeof return for an array, a function, and NaN?
console.log(typeof [])   //object //Because its an object
console.log(typeof {})    //object     //because array is a special type of object that why he give us object
console.log(typeof function(){})  //function
console.log(typeof NaN)   //NUMBER

////==============================================================================================================================================================================================

//5. How do you check whether a value is an array?
console.log(Array. isArray([]))  //true
//This is the correct and recommended way to check for an array 

//==============================================================================================================================================================================================

//6. What is the difference between == and ===?
//== converts types before comparing, while === compares value and type with no conversion.
console.log( 5 == "5")  //true
console.log( 5 === "5")  //false
// == Its convert all type to the number if "5" it convert to 5










