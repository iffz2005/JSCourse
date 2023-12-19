// Dates

let myDate = new Date() 

// console.log(myDate.toString());        // Sun Dec 10 2023 07:27:05 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());    // Sun Dec 10 2023 
// console.log(myDate.toLocaleDateString());  // 12/10/2023
// console.log(myDate.toISOString());       // 2023-12-10T07:27:05.115Z
// console.log(myDate.toTimeString());      // 07:27:05 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleTimeString());  //7:27:05 AM

// console.log(typeof myDate);     // object

let myCreatedDate = new Date(2023, 0, 23)    // in js month start from 0
console.log(myCreatedDate.toDateString());

let date2 = new Date(2023, 0, 23, 5, 3)
console.log(date2.toLocaleString());

let date3 = new Date("2023-01-14")       // if the month is written in yyyy-mm-dd format, then month start with 01
console.log(date3.toLocaleString()); 

let date4 = new Date("01-10-2023")
console.log(date4.toLocaleString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp);                // miliseconds
console.log(myCreatedDate.getTime());   // we can compare dates as such

console.log(Math.floor(Date.now()/1000));           // to convert the time in seconds (but always compare times in miliseconds)

// More Methods

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());     // Day also starts with 0, 0 => Sunday
console.log(newDate.getMonth() + 1);    // Month also starts with 0, hence for the user wont get confused, we'll add +1 to it

// String Interpolation
//  String interpolation is a way to embed expressions within string literals. 
// In JavaScript, you can use template literals for string interpolation.

// Eg: 
// `${newDate.getDay()} and the time `
 
//customization of date: 
newDate.toLocaleString('default',{
    weekday: "long"
})