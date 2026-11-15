//23. What problem does TypeScript solve for JS’s type system?
/*
What problem does TypeScript solve for JavaScript's type system?

TypeScript solves the problem of JavaScript's lack of built-in static type checking.
JavaScript is dynamically typed, which means variables can hold values of different types during execution.
This flexibility is useful, but it can also cause unexpected errors.
TypeScript adds a static type system on top of JavaScript to help catch many type-related errors before the code runs.
*/
/*
1. Problem with JavaScript
JavaScript allows you to assign different types of values to the same variable.
let age = 21;
age = "hello";
age = true;
console.log(age); //true

JavaScript allows this because it is dynamically typed.
But sometimes this flexibility creates bugs.
*/
/*
Example: Unexpected error
function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); //30
console.log(add("10", 20)); //1020

Our intention might be to add two numbers, but JavaScript also allows string concatenation.
This can create unexpected results.
*/
/*
2. How TypeScript solves this problem
//TypeScript allows us to define the types of variables, function parameters and return values.
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));
console.log(add("10", 20)); // TypeScript error

Here:
- a: number means a must be a number.
- b: number means b must be a number.
- : number after the parentheses means the function should return a number.
TypeScript detects the incorrect string argument during type checking.

Important: TypeScript checks types before execution, but it does not automatically prevent incorrect values at runtime. Its types are erased when compiled to JavaScript.
*/
/*
3. JavaScript vs TypeScript
/*
================================================================================================
                         JavaScript vs TypeScript
================================================================================================

| Feature          | JavaScript                            | TypeScript                                 |
|------------------|---------------------------------------|--------------------------------------------|
| Typing           | Dynamic                               | Static type checking                       |
| Type declaration | Not required                          | Supported                                  |
| Type checking    | Runtime behavior                      | Before execution                           |
| Error detection  | Many errors appear at runtime         | Many type errors caught during development |
| Interfaces       | No native TypeScript-style interfaces | Yes                                        |
| Generics         | No built-in generic type system       | Yes                                        |
| Compilation      | Runs directly in JS environments      | Transpiles to JavaScript                   |

------------------------------------------------------------------------------------------------
QUICK REVISION:

1. JavaScript  -> Dynamically typed language.
2. TypeScript  -> JavaScript with static type checking.
3. JavaScript  -> Type errors may appear at runtime.
4. TypeScript  -> Many type errors are caught during development.
5. TypeScript  -> Supports interfaces and generics.
6. TypeScript  -> Compiles/transpiles into JavaScript.

================================================================================================
*/

//==============================================================================================================================================================================================

//25. What is the difference between typeof and instanceof?
//JavaScript: instanceof Operator
//The instanceof operator is used to check whether an object belongs to a particular class or has that class's prototype in its prototype chain.
//instanceof checks whether an object was created from a particular constructor or class (through its prototype chain).

//1. Basic syntax
object instanceof Constructor
/*
It returns a Boolean value:
- true → The constructor's prototype exists in the object's prototype chain.
- false → It does not exist in the object's prototype chain.
*/

//2. Basic example
let arr = [];

console.log(arr instanceof Array);  //true
console.log(arr instanceof Object); //false
console.log(arr instanceof String); //false

//intanceof check whether from where that thing come means if your aniket its check your a son of sajay its not aniket === sanjay

