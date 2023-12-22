// Singleton <= from the constructor
// Object.create 


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Ifrah",
    "full name": "Shaikh Ifrahnaaz",       // this value is not accessed by .
    // mySym: "mykey1",       
    [mySym] : "mykey1" ,
    age: 18,
    email: "ifrah@gmail.com",
    isLoggeddIn: false,
    lastLoggedIn: ["monday", "Saturday"]
}

console.log(JsUser.email)       // one way to access
console.log(JsUser["email"]);    // correct way to access
console.log(JsUser["full name"]);
// console.log(typeof(JsUser.mySym));     // here mysym is not used as symbol but a normal key, if it is not written in []
console.log(JsUser[mySym]);               // when reeferrring to symbol, must add []
console.log(typeof(JsUser[mySym]));

JsUser.email = "Ifrahnaaaz@gmail.com"

// Object.freeze(JsUser)             // it will not allow the user to change JsUser

JsUser.email = "Iff@gmail.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User")
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting2());
