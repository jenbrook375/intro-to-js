// boolean data type
var a = true; // value = 1
var b = false; // value = 0
var c = "cat";

console.log ( 12 == '12'); // loose comparison checks for digits, returns true/false
console.log(24 === '24'); // strict comparison checks for type and value returns true/false

// is Not a Number checks to see if input is a digit and returns true/false
console.log(isNaN(2000)); // returns false
console.log(isNaN('2000')); // returns false
console.log(isNaN('dog')); // returns true
console.log(isNaN(c)); // returns true
console.log(isNaN(4/23/2019)); // returns false
console.log(isNaN(true)); //returns false


