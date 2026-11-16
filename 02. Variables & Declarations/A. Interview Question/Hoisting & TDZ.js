//18. What is hoisting?
//Declarations are registered at the start of their scope before code runs.

//19. What does this print? console.log(a); var a = 5;
//undefined.

//20. And this? console.log(a); let a = 5;
//ReferenceError, because a is in the Temporal Dead Zone.

//21. What is the Temporal Dead Zone?
//The time between entering a scope and the let/const line being executed, during which access throws.

//22. Are let and const hoisted?
//Yes, but not initialized, which is why the TDZ exists.

//23. Are function declarations hoisted? Function expressions?
//Declarations are fully hoisted. With var f = function(){}, only the var is hoisted (as undefined), so calling it early throws TypeError.

//24. Does typeof on a TDZ variable throw?
//Yes. typeof undeclaredVar is safe ("undefined"), but typeof on a TDZ variable throws.

