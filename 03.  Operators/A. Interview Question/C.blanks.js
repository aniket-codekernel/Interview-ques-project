//1. 5 % 3 gives ______.
console.log(5 % 3) // 2  

//====================================================================

//2. 2 ** 3 ** 2 gives ______ (hint: right-to-left)
console.log(2 ** 3 ** 2) //512
/*
(2 ** (3 ** 2)) = (2 ** 9) =512
*/

//====================================================================

//3. a ??= 10 assigns 10 only if a is ______ or ______.
//null or undefined

//===================================================================

//4. typeof undeclaredVariable returns ______ and doesn’t throw an error.
let a ;
console.log(typeof a)  //undefined

//====================================================================

//3. The operator ... is called the ______ / ______ operator.
//Spread operator
let arr1 = [10, 20, 30];
let arr2 = [...arr1];
console.log(arr2); // [10, 20, 30]

//Rest operator
function add(...numbers) {
    console.log(numbers);
}
add(10, 20, 30);

//======================================================================

//