//1.Why does typeof null return "object"?
//Because its a bug its cannot be fix if we fix that millons of website stop working

//2.Why does NaN !== NaN, and how do you correctly check for NaN?
//According to JavaScript's number comparison rules, NaN is considered unequal to every value, including itself.
//This behavior follows the IEEE 754 floating-point standard.
console.log(Number.isNaN(NaN));     // true
console.log(Number.isNaN(100));    // false
console.log(Number.isNaN("hello")); // false
