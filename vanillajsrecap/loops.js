// for each
// allows to iterate over N ELEMENT
// TAKES A FUNCTION
const myArray=[1,2,3,5]
myArray.forEach(function(element){
    console.log(element)
})
// // In this example, we have an array called myArray with five elements. The forEach() method is called on the array and takes a function as its argument. This function is called once for each element of the array, with the current element passed as an argument.

// In this case, the function simply logs each element to the console.

// The output of this code would be:
1
2
3
4
5
// The syntax of the forEach() method is:

// array.forEach(function(currentValue, index, arr))
// Here,

// function(currentValue, index, arr) - a function to be run for each element of an array
// currentValue - the value of an array
// index (optional) - the index of the current element
// arr (optional) - the array of the current elements

updating
let students=['jon','sara','mark'];
students.foreach(myfunction);
 function myfunction(item,index,arr){
   arr[index]='helo'+'item'
 }
const names = ['eugene','mark','celery'];
names.foreach(item =>{
    console.log(item);
})




// 2.for in loop
// syntax
for( let key in object){
    // body for ror in
}
// 1.iterate through an object //properties in an object
  const tour={
    name:'safari',
    ticket:'1234',
  }
  for( let key in tour){
    console.log(`${key} :${tour[key]}`)

  }
// 2.update values of properties
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
}

// using for...in
for ( let i in salaries) {

    // add a currency symbol
    let salary = "$" + salaries[i];

    // display the values
    console.log(`${i} : ${salary}`);
}
// 3.iterate over string
const string='florence'
for (let i in string){
    console.log(string[1])
}
//You should not use for...in to iterate over an array where the index order is important.


// for of canot be used to iterate over objects
// used to iterate over the values of an ilitererable
for( let element of iterable){
    // body of for of
}

// array
const students = ['John', 'Sara', 'Jack'];

// using for...of
for ( let element of students ) {

    // display the values
    console.log(element);
}
// 2.strings
const me=('florence');

for(let i of me){
    console.log(i)
}
// can be used with break statements
const myArray = [1, 2, 3, 4, 5];

for (const element of myArray) {
  if (element === 3) {
    break;
  }

  if (element % 2 === 0) {
    continue;
  }

  console.log(element);
}
// One thing to note is that for...of
//  does not give you access to the current index of the element, unlike the traditional for loop or forEach(). If you need the index, you can use the entries() method of the iterable object to get an iterator that returns both the index 
// and value of each element:

const myArray = [1, 2, 3, 4, 5];

for (const [index, element] of myArray.entries()) {
  console.log(`Index: ${index}, Element: ${element}`);
}
// In this example, we use the entries() method to get an iterator that returns both the index and value of each element. We use destructuring assignment to assign the index to the index variable and the element to the element variable.

// The output of this code would be:

// Index: 0, Element: 1
// Index: 1, Element: 2
// Index: 2, Element: 3
// Index: 3, Element: 4
// Index: 4, Element: 5
