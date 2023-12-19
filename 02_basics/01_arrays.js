// arrays

// brackets => []
// parentheisis => ()
// braces / curly braces => {}

// const myArr = [0, 1, 2, 3, 4, 5, true, "ifrah"] 
// different types of elements can be stored in a single variable
// arrays in js is resizable
// array elements cannot be accessed using arbitrary strings, they are accessed same way as other oop languages

// shallow copy => sc of an object is a copy whose properties share the same referrance
// deep copy => dc of an object is a copy whose properties share the same referrance

//declaration of arrays;
const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["captianAmerica", "ironman", "thor"]

const myArr2 = new Array ( 1, 2, 3, 4, 5)

// console.log(myArr[1]);

// Array Methods
  
// myArr.push(6)           // adds element at the end of the list
// myArr.push(7)
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(9,11)          // adds element at the starting of the list
// console.log(myArr);

// myArr.shift()               // removes the first element from the list
// console.log(myArr);

// console.log(myArr.includes(9));   // returns true if the list contains the argument value
// console.log(myArr.includes(9)); 

// console.log(myArr.indexOf(9)); // returns the index of the argument value
                               // it returns -1 or other non existing index if the value doesn't exist
// console.log(myArr);        
// console.log(typeof myArr); 

const newArr = myArr.join()    // adds all the elements of an array into a string

// console.log(newArr); 
// console.log(typeof newArr);         
                             

// slice and splice 

console.log("A ", myArr);
 
const myn1 = myArr.slice(1, 3);     // returns a section of array
                                    // starts from arg 1 and ends just before arg2

console.log(myn1)

console.log("B ", myArr);          // Original array after using slice

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ", myArr);         // Original array after using splice

// difference between slice and spilce
// slice return the section (from [a,b), last element of range is not included in slice) of an array without changing the original array
// whereas splice cuts the array from [a,b] (utna portion original array ,=me se nikal hi jayega)
// it changes the original array