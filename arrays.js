// push an element to the last index we use push
var snacks=["crisps","biscuits","oreos"];
snacks.push();
console.log(snacks)

// add an element to the beginning of index we use unshift
var binge=["crisps","biscuits","oreos"];
binge.unshift("cookies");
console.log(binge)

// remove the last element  we use pop
var snacks=["crisps","biscuits","oreos"];
snacks.pop();
console.log(snacks)



// remove element and begining of index we use shift
var binge=["crisps","biscuits","oreos"];
binge.shift();
console.log(binge)

// array methods
// 1.concat
// joins tow or more arrays and returns the result

var exercise=["running","skipping"];
var hiit=["jumping jacks","burpees"];
var routine=exercise.concat(hiit);
console.log(routine);


// 2. Slice select the parts that you want from an array 
// slice takes 2 arguments
// the starting index (inclusive) and the ending index 
// q what happens when 2nd argument is ommited it removes the first elements and returns the rest
var gifts=["car","house","land","vacation","iphone"];
 var whatIwant=gifts.slice(1,3)
console.log(whatIwant)

// 3.allows you to add ,remove or replace elemens in an array [splice]
array.splice(startIndex, deleteCount, item1, item2);
// startIndex: The index at which to start changing the array.
// deleteCount: The number of elements to remove from the array. If set to 0, no elements will be removed.
// item1, item2, ...: The elements to add to the array. If you don't want to add any elements, you can omit this parameter.
const cars = ['ferari', 'aston martin', 'buggati', 'pajero'];
cars.splice(1, 2); 
console.log(cars); 

// inseert
var myArray = ['apple', 'banana', 'cherry'];
myArray.splice(1, 0, 'date', 'elderberry'); // inserts 'date' and 'elderberry' at index 1
console.log(myArray); 

// replacing elements
var myArray = ['apple', 'banana', 'cherry'];
myArray.splice(1, 1, 'date'); // replaces 'banana' with 'date'
console.log(myArray); // ['apple', 'date', 'cherry']






// 4. know the position of an element,[indexOf];
// q can I Find two elements;
// If the element is not in an array, indexOf() gives -1.


var gifts=["car","house","land","vacation","iphone"];
 var whatIwant=gifts.indexOf("land",)
console.log(whatIwant)

// 5.sort arranges in ascending order
const animals=["zebra","baboon","octopus","snail"];
animals.sort();
console.log(animals);



