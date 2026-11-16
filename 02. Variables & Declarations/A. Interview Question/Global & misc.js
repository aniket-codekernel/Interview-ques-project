//31. What happens to var at global scope vs let?
//Global var becomes a property of window/globalThis. let/const don’t.

//32. What is "use strict" and how does it affect variables?
//It disallows accidental globals, duplicate parameters, and some other unsafe behavior.

//33. Can you declare multiple variables in one line?
//Yes: let a = 1, b = 2, c;

//34. What is destructuring assignment?
//const { a, b } = obj; and const [x, y] = arr; unpack values into variables.

//35. How do you swap two variables without a temp?
//[a, b] = [b, a];.

//36. Primitive vs reference values in variables?
//Primitives are copied by value. Objects are copied by reference (both variables point to the same object).

//37. What is Object.freeze() vs const?
//const protects the binding. freeze protects the object’s properties (shallowly).

//38. What does let a = b = 5; do?
//b becomes an accidental global and a is a local let. It’s a common trick question.