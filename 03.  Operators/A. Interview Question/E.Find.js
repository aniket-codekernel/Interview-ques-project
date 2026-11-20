//E. Find the bug
//1.
// let age = prompt("Enter age");
// if (age + 5 > 20) {
//     console.log("Adult in 5 years");
// }
//Why does this misbehave for input "16"?


//Becuse it will prompt return a string "1"+5=15 >20 false "2" + 5 =25 >20

//2.
let count = 0;
let value = count ||= 10;
//The user wants 0 to be kept. What’s wrong, and how do you fix it?
console.log(value)
// ||=   "If the current value is falsy (empty, zero, null, etc.), replace it. Otherwise, leave it alone."

//3.
if (x = 5) { console.log("x is 5"); }
//What’s the bug?
//x is not undefined and this is equal to 5 x = 5

//4.
console.log(0.1 + 0.2 == 0.3);
//It prints false. Explain why and give a safe way to compare.
//because Javascript follow ip633 rule




