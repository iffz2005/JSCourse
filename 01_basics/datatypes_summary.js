//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100             //js is dynamically typed language
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n    //add n at last to mat it bigint



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {                        //objects are represented in curly braces
    name: "Ifrah",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++ MEMORY ++++++++++++++++++++++++++++

// Stack (Primitive)     // copy of value is given
// Heap (Non-Primitive)  //in heap same reference is given

let myname = "ifrah" ;
let anothername = myname ;
anothername = "naaz"

console.log(anothername);
console.log(myname);                // value of myname is not changed
                                    //  even after changing the value of anothername, as while assigning anothername as myname,
                                    // only copy is assigned and not the original value, hence no effct on myname 
                   

let user1 = {
    email: "user@gmail.com" ,
    upi: "upi@xyz"
}                 

console.log(user1.email);

let user2 = user1;   //here, the reference value will be passed as it is object.

user2.email = "ifrah@google.com"

console.log(user2.email);
console.log(user1.email);  // therefore, changing the value in user2 will eventually change the value in user1, as they share the same reference
