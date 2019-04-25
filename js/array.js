// array data type
var arr1 = []; // empty array / array defined by square brackets
var arr2 = [1, 2]; // has 2 elements
console.log (arr2);
console.log(arr2[1]);

var arr3 = ['hi', 'hello', 'there'];
console.log(arr3);
console.log(arr3[2]);
console.log([arr3.length]);
console.log(arr3[arr3.length - 1]); // displays number of indices in array

arr3.push('welcome'); // inserts welcome to the last index of arr3
console.log(arr3); 
console.log(arr3[arr3.length - 1]); 

arr3.unshift('greetings'); // inserts greeting to first index of arr3
console.log(arr3);
 
arr3.splice(2, 1, 'Jennifer'); // removes 1 item at index 2 and replace with something else
console.log(arr3);

arr3.splice(2, 2, ); // removes 2 items starting at index 2 
console.log(arr3);

arr3.splice(2, 2,  'Jennifer', 'Brookshire'); // removes 2 items and replaces with 2 items starting at index 2
console.log(arr3);

arr3.splice(2, 0, 'hola'); 
console.log(arr3);


var arr4 = [10, 40, 'abc', 'xyz', true] // not recommended
console.log(arr4);

arr4.pop(); // removes last item of arry4
console.log(arr4);

arr4.shift(); // removes firs item of arr4
console.log(arr4);

var arr5 = arr4.slice(); // copies arr4 and moves it into arr5// use instead of arry4=arry6
console.log(arr5);

var arr7 = arr4.slice(1, 2); // stops before index 2, but does not include it
console.log(arr7);

var arr7 = arr4.slice(1, 3); // starts at index 1, captures everything before index 3
console.log(arr7);

