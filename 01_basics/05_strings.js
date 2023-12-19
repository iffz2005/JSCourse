const name = "Ifrah"
const repoCount = 10

// console.log(name + repoCount + " Value");   // a type of syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  
//the above syntax is much preferrable compared to the first one


const gameName = new String('ifrahnaaz')    // sytax to declare the string

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

//methods of javascript
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "    ifarh     "
console.log(newString1);
console.log(newString1.trim());       //it works on blank spces and line terminator

const url = "https://ifrah.com/ifrahnaazshaikh"
// console.log(url.replace('naaz', '-'));
console.log(url.includes('rehan'))