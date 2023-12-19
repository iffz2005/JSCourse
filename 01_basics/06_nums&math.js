 const score = 400
// console.log(score);

   const balance = new Number(100)
//  console.log(balance);

//  console.log(balance.toString());
//  console.log(balance.toString().length);
//  console.log(balance.toFixed(2));           //fixing 2 values after decimal

 const otherNumber = 23.3266
 const otherNumber1 = 23.8966

//  console.log(otherNumber.toPrecision(4));
//  console.log(otherNumber1.toPrecision(4));


const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));



// +++++++++++++++++++++++ Maths ++++++++++++++++++++++

// console.log(Math);

// functions of maths

// console.log(Math.abs(-4));      //absolute => negative value to positive
// console.log(Math.round(4.6));  
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(2, 3, 5, 4));
// console.log(Math.max(2, 3, 5, 4));

console.log(Math.random());      // by default .random() will give values between 0 to 1

console.log((Math.floor(Math.random()*10)) + 1);  // a bit custom (>0 to 9)

// customizing: 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) ) + min)

// explanation:
// (max - min + 1)   for range