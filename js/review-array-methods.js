// fruit array with 3 variables
var fruit = ['apple', 'orange', 'banana'];
console.log(fruit); // display fruit array

console.log(fruit[0]); // display apple from first index (0)
console.log(fruit[1]); // display orange from second index (1)
console.log(fruit[2]); // diplay banana from third index (2)

fruit.unshift('strawberry'); // adds strawberry to the first index of the array
console.log(fruit);
fruit.push('grape'); // adds grape to the end of the array
console.log(fruit);
fruit.splice(2, 1, 'kiwi'); // removes orange from array third index (2) and replaces with kiwi
console.log(fruit);
fruit.splice(1, 1); // removes the second fruit in the array (1)
console.log(fruit);

var fruit2 = fruit;
console.log(fruit2);