// string variable
var hello = 'Hello World!';
console.log(hello); // display string Hello World!

console.log(hello.split(' ')[0]); // display Hello only

console.log(hello.slice(6, 11)); // display World only
console.log(hello.substring(6, 11)); // another way to display only world
console.log(hello.substring(6)); // display all indices after specified index