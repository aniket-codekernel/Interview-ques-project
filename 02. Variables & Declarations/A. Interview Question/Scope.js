//12. What is scope? Types of scope?
//Where a variable is accessible: global, function, block (and module).

//13. Function scope vs block scope?
//var ignores {} blocks and only respects functions. let/const respect blocks.

//14. What is lexical scope?
//Scope is determined by where code is written, and inner scopes can access outer ones.

//15. What is the scope chain?
//The lookup path from the current scope outward to global.

//16. What is variable shadowing? What is illegal shadowing?
//An inner variable with the same name hides the outer one. Illegal: let a; { var a; } in the same function scope.

//17. What happens when you assign to an undeclared variable?
//Sloppy mode creates a global. Strict mode throws a ReferenceError.