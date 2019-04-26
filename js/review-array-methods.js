// creates array named 'fruit' and adds 3 strings
var fruit = ['apples', 'oranges', 'bananas'];
console.log(fruit); // display array 'fruit'
console.log(fruit[0]); // display string in  first index position 
console.log(fruit[1]); // display string in second index postion
console.log(fruit[2]); // display string in third index position

fruit.push('strawberries'); // add string 'strawberries' to end of array
console.log(fruit);

fruit.unshift('kiwis'); // add string 'kiwis' to beginning of array
console.log(fruit);

fruit.splice(2, 1, 'grapes'); // remove string 'oranges' from index 2 (third word in array) and replace with 'grapes'
console.log(fruit);

fruit.splice(1, 1); // remove string 'apples' from index 1 (second word in array) and do not replace
console.log(fruit);

var fruit2 = fruit.slice(); // copies contents of array 'fruit' and pastes into array 'fruit2'
console.log(fruit2);
