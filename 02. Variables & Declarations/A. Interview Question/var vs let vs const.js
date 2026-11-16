//7. Difference between var, let, and const?
/*
 * var: function-scoped, hoisted as undefined, can be redeclared and reassigned.
 * let: block-scoped, hoisted but in the TDZ, no redeclaration, can be reassigned.
 * const: block-scoped, TDZ, no redeclaration, no reassignment, must be initialized.
*/

//8. Can you redeclare a var? A let?
//var yes, let no (SyntaxError in the same scope).

//9. Why can’t you write const x;?
//const must be initialized at declaration.

//10. Is const truly immutable?
//No. The binding can’t be reassigned, but object and array contents can be mutated. Use Object.freeze() for shallow immutability.

//11. When should you use var, let, or const?
//Default to const, use let when you need to reassign, and avoid var in modern code.

