// JavaScript Variables
// JavaScript mai variables ka use data ko temporarily store karne ke liye hota hai.
// Jab apko code mai kisi value ko repeatedly use karna ho, ya kisi calculation ka result save karna ho, tab variables ka use hota hai.

// Types of Variables in JavaScript
// JavaScript mai teen tarah ke variables hote hain:
// var (ES5): JavaScript ke purane version (ES5) se introduce hua.
// let (ES6): JavaScript ke naye version (ES6) ka part hai.
// const (ES6): Ye bhi ES6 ke sath introduce hua aur immutable values ke liye use hota hai.


// Difference Between Variables and Constants
// Variables: Aisi values jo code ke dauran badli ja sakti hain. Example: let aur var.
// Constants: Aisi values jo ek bar define hone ke baad badli nahi ja sakti. Example: const.



// Comparison: var, let, and const
// 1. var (ES5)
// Hoisting: var hoisted hota hai, iska matlab ye hai ke isko declare karne se pehle bhi use kiya ja sakta hai (undefined return karega).
// Scope: var global aur function scope hota hai, lekin block scope nahi follow karta.
// Window Object: Agar ap var ka variable define karte hain, to ye automatically window object ka part ban jata hai.

// console.log(a); // undefined (hoisted)
// var a = 10;

// if (true) {
//  var b = 20;
// }
// console.log(b); // 20 (global scope)


//2. let (ES6)
// Hoisting: let hoisting follow nahi karta, to isko declare karne se pehle use karne par error aata hai.
// Scope: let block scope ko follow karta hai, iska matlab sirf us block ke andar hi valid hoga.
// Window Object: let variables window object ke part nahi hote.
// console.log(x); // Error: Cannot access 'x' before initialization
// let x = 10;

//if (true) {
//  let y = 20;
// }
// console.log(y); // Error: y is not defined (block scope)


// 3. const (ES6)
// Immutability: const ki value define hone ke baad change nahi ho sakti.
// Scope: const bhi let ki tarah block scope follow karta hai.
// Window Object: const variables bhi window object ka part nahi bante.
// const z = 30;
// z = 40; // Error: Assignment to constant variable

// if (true) {
//  const w = 50;
// }
// console.log(w); // Error: w is not defined (block scope)



// scopes in javascript
// Scope ka matlab hota hai ek variable ki accessibility ya visibility, yani ye define karta hai ke ek variable code ke kis 
// hissay mai accessible hoga. JavaScript mai teen types ke scopes hote hain:

// 01) = global scope
// 02) = function scope mens local scope 
// 03) = block scope


// 01) = global scope
// Jab ek variable function ya block ke bahar declare hota hai, to wo globally accessible hota hai.
// Iska matlab hai ke us variable ko pura program kahin se bhi access kar sakta hai.

// example

// var globalVariable = 10;

// 02) = function scope mens local scope 
// Jab ek variable function ke andar declare hota hai, to wo sirf us function ke andar hi accessible hota hai.
// Function ke bahar us variable ko access karne ki koshish karenge to error aayega.
// Ye var ke sath kaam karta hai.
// example

/* function LocalScope(){
    var localVariable = 20;
    console.log(localVariable);
}*/

//LocalScope(); // Output: 20


// 03) = block scope
// Jab ek variable kisi block ({}) ke andar declare hota hai, to wo sirf us block ke andar hi accessible hota hai.
// Ye let aur const ke sath kaam karta hai, lekin var block scope follow nahi karta.
// example

/*{
    let blockVariable = 30;
    console.log(blockVariable); // Output: 30
}*/

//console.log(blockVariable); // Error: blockVariable is not defined (block scope)


// All functions
/*
JavaScript mai functions ka use hota hai reusable code likhne ke liye jo kabhi bhi (future mai) call kiya ja sakta hai.functions kaafi useful 
hote hain jab: Aapko koi code baar-baar chalana ho (reuse karna ho).Aapko code alag-alag input data ke saath chalana ho.
Aap specific code ko encapsulate (chhupana) karna chahte ho, taake wo sirf tab chale jab zarurat ho.
*/


// simple Function

/*
function simpleFunction() {
    console.log('This is a simple function');
};
*/

// Function Expression
// Function Expression ka use JavaScript mai tab hota hai jab aapko ek controlled function banana ho jo variable ke andar store ho 
// aur sirf us variable ke reference se access ho. Iska ye matlab hai ke aap function ko ek variable ke through manage karte ho.
// or ya function hoisted nahi hota

// example
/*
var  ExpressionFunction = function() {
    console.log('This is a functionExpression');
};

ExpressionFunction(); 
*/

//  Arrow Function
// Arrow Function JavaScript ka ES6 feature hai jo functions ko short aur concise tarike se likhne ka option deta hai. 
// Arrow functions ka syntax zyada compact hota hai aur readability improve karta hai.

// example
/*
 var ArrowFunction = () => {
    console.log('This is a arrowFunction');
};

ArrowFunction(); 
*/


// Anonymous Function
// Anonymous Function JavaScript mai wo function hota hai jo naam ke bagair define hota hai. Iska koi specific identifier nahi hota,
// aur ise dynamically use karne ke liye ek variable, argument, ya immediate invocation ke through call kiya jata hai.

// example
/*
setTimeout(function()=> {
    console.log('This is an anonymous function');
}, 10000)
*/


// Immediately Invoked Function Expression (IIFE)
// IIFE ek aise function hota hai jo define hote hi turant execute ho jata hai. Iska use JavaScript mai tab hota hai jab aapko ek aisa function
// chahiye jo:Turan chal jaye (Immediately Executed). Variables ko encapsulate kare (Private Scope banaye).Global scope ko pollute hone se bacha

// example
/*
 (function() {
    var privateVariable = 10;

    console.log(privateVariable); // Output: 10
})();
*/

// Constructor Function
// Constructor Function ka use JavaScript mai tab hota hai jab hame multiple objects with similar properties aur methods create karne ho.
// Is function ko new keyword ke saath call kiya jata hai, jo ek naya object banata hai aur us object ko function ke andar this keyword 
// se bind karta hai.

// example
/*
 function Car(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;

    this.getDetails = function() {
        console.log('Model:'+ this.model + ', Year:'+ this.year + ', Color:'+ this.color);
    };
};

*/


// rest parameter and Default Parameter functions


// Methods
// Methods JavaScript mai woh functions hote hain jo kisi object ke andar define kiye jate hain. Yeh functions object 
// ke properties aur behavior ko control karte hain. Methods ko object ke members ke saath interact karne ke liye use kiya jata hai.


// example

// /*
// var obj = {
//     name: 'John',
//     greet: function() {
//         console.log('Hello'+ this.name);
//     };
// };

// obj.greet(); // Output: Hello John
// */


// Loops
// JavaScript mai loops ka use tab hota hai jab hame apne code ko ek ya usse zyada baar repeat karna ho is ka leya loop use hota hai.

// for loop
// JavaScript me for loop ka use tab hota hai jab hame ek block of code ko bar-bar execute karna ho, aur hame pehle se pata ho ki code
// kitni baar repeat karna hai (e.g., array ke elements iterate karna, ya specific range ke numbers print karna)

// Example

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// For loop to iterate through the array
for (let a = 0; a < array.length; a++) {
  console.log(array[a]); // Array ke elements one by one print honge
}

// while loop
// JavaScript me while loop ka use tab hota hai jab hame ek block of code ko repeat karna ho jab tak ek specific condition true rahe.
// Jaise hi condition false hoti hai, loop execution stop ho jata hai.

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a = 0;

// While loop to iterate through the array
while (a < array2.length) {
  console.log(array2[a]); // Array ke elements one by one print honge
  a++; // Increment karte hain taaki loop terminate ho sake
};


// do while loop
// JavaScript me do while loop ka use tab hota hai jab hame kam se kam ek baar loop execute karna ho, chahe condition false hi kyu na ho. 
// Is loop me pehle body execute hoti hai aur uske baad condition check hoti hai

// Example

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = 0;
do {
    console.log(array3[b]); // Array ke elements one by one print honge
    b++; // Increment karte hain taaki loop terminate ho sake
}
while(b < array3.length);


// for in loop
// JavaScript me for-in loop ka use tab hota hai jab hame kisi object ke properties par iterate karna ho. Yeh loop ek-ek karke object ke 
// har property ka naam (key) retrieve karta hai, jise hum use karke uski value access karte hain

// Example

let obj = {
    name: 'test',
    age: 30,
    city: 'New York'
};

for( let key in obj) {
    console.log(obj[key]);
}

// for of loop
// javascript mai for of loop ka use is leya keya jata hai jab hum ko loop kase array ya sting ke apur loop krna ho is ka leya hum for of loop ka use kr te hai

// Example

let string = "Hello World!";

for(let key of string) {
    console.log(key); // String ke characters one by one print honge
}


// condition setements
// JavaScript me conditional statements ka use tab hota hai jab hume kisi value ya expression ke basis par code ke alag-alag parts ko execute 
// karna ho. Yeh humein allow karta hai ki hum check kar sakein ki koi condition true hai ya nahi, aur uske hisaab se kuch specific actions 
// perform karein.


// if setements
// If statement ka use tab hota hai jab hume ek specific condition ko check karna ho. Agar condition true hoti hai, tabhi if block ke andar 
// ka code execute hota hai. Agar condition false hoti hai, to if block ke andar ka code skip ho jata hai.


// Example
if(10 == "10") {
    console.log(true);
};


// else if setements
// Else if statement ka use tab hota hai jab hume ek se zyada conditions ko sequentially check karna ho. Agar pehli condition false ho jaye, 
// to next condition ko check kiya jata hai. Jo bhi condition true hoti hai, uska block execute hota hai, aur baaki conditions ko ignore kar 
// diya jata hai.


// Example


let numbers = 10;
if (numbers === "10") {
    console.log(false)
} else if(numbers !== "10"){
    console.log(true)
}

// stwitch conditions
// Switch statement ka use tab hota hai jab hum ek variable ya expression ke multiple possible values ko check karna chahte hain. 
// Yeh code ko if-else se zyada readable aur structured banata hai.


// Example

let grader = "A";
switch (grader) {
    case "B":
        console.log("Grade: B");
    break;
    case "C":
        console.log("Grade: A");
    break;
    default:
        console.log("Invalid grade");
}

// ternary operator
// Ternary operator ek shorthand syntax hai if-else statement ke liye. Jab ek simple conditional check karni ho aur uska output ek value ya 
// expression return karta ho, tab ternary operator ka use hota hai.

// Example

let isCounentNumber = 10;
let answer = isCounentNumber < 0 ? "yes" : "no";
console.log(answer)


// Template literals
// JavaScript ki Template Literals aik naya aur asaan tariqa hai strings likhne ka jo ES6 (ECMAScript 2015) me introduce hua. Yeh simple aur 
// powerful hai, especially jab hame dynamic data strings ke andar embed karna ho. Ab mai isko step-by-step explain karta hun.

let newTemplateString = `hello`;

// is mai ya feature bi hai ke ap strin ke abder durse valiables ko executed krwa sehkte hai

// is ki help se ${templateString}; <= is ki help se


// destructuring
// Destructuring ek short syntax hai jo hume arrays aur objects ke values ko easily extract karne ka option deta hai aur unhe variables me 
// store karne ki facility provide karta hai.

// Array destructuring

// Example
let destructrringArray = [1, 2, 3, 4, 5];
let [one, two, three, ...four] = destructrringArray;
console.log(one, two , three, four)
four.pop();
four.unshift(4)
console.log(four)

// Object destructrring

// Example 

let destructuringObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

let {name, ...age} = destructuringObject;
console.log(name, age);

// Spread oprater
// Spread operator (...) JavaScript me array ya object ke elements/properties ko expand karne ke liye use hota hai. Iska istemal karte huye aap 
// kisi array ya object ki values ka real copy bana sakte hain, bina unhe mutate (original value ko change) kiye. ues kr sehkti hai.

let spreadarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let useSpreadOperter = [...spreadarray];

// Array
// JavaScript mai array ek special type ka variable hota hai jo ek hi jagah par multiple values store karne ki facility deta hai. Arrays ka use 
// tab kiya jata hai jab hume ek se zyada values ko ek organized tarike se store aur access karna ho.

// Example

let Arrayarray = [1,2,3,4,5,,65,6,7,7,7,7];


// String
// JavaScript mein String ek built-in object hai jo text ko represent karta hai. Strings ko " " ya ' ' ke andar likha jata hai. Jaise:

let Stringstring = "string";


// Array Methods
// JavaScript mai array methods ka use arrays ke elements ko manipulate karne, unhe modify karne, ya unse related operations perform karne 
// ke liye hota hai. Yeh methods hume arrays ke saath efficiently kaam karne ki flexibility dete hain.


// push
// ies mehtod sa hum array ka ander ek element ko add krte hai Yeh original array ko modify (mutate) karta hai 
// aur updated array ki new length return karta hai.

// pop
// Description: pop() method ka use array ke last element ko remove karne ke liye hota hai. Yeh original array ko modify (mutate) karta hai aur 
// jo element remove hota hai, usko return karta hai.

// unshift
// ies mehtod sa hum array ke start mai ek element ko add krte hai Yeh original array ko modify (mutate) karta hai 
// aur updated array ki new length return karta hai.

// shift
// shift() method ka use array ke start se ek element ko remove karne ke liye hota hai. Yeh original array ko modify (mutate) karta hai 
// aur jo element remove hota hai, usko return karta hai.


// slice
// javascript mai slice method ka use kr ka hum array ya string ko kis hissa se copy krna start or kis hissa tak copy krna hai or Yeh ek 
// new array ya substring return karta hai bina original array ko modify kiye. Isme hum starting aur ending index specify karte hain.

// Example

let arraySlice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sliceArray = arraySlice.slice(2, 6);
console.log(sliceArray);


// splice
// javascript mai splice method ka use ek array ko modify karne ke liye use hota hai. Iska use karke hum array se elements remove kar sakte hai.
// array mai elements add kar sakte hain. array ke kisi specific position element ko add aur remove dono ke sath kar sakte hain.

// Syantx
// splice(startIndex, deleteCount, addItems. addsecondItems.);

// Example
let arraySplice = ["a", "b", "c", "d", "e", "f", "g"];

// Using splice to replace one element at index 5
let spliceArray = arraySplice.splice(5, 1, "Hello Kuch kr lo gando");

// Log the result
console.log(spliceArray); // Output: ["f"] (removed element)
console.log(arraySplice); // Output: ["a", "b", "c", "d", "e", "Hello Kuch kr lo gando", "g"]


// map
//  map() method ka use ek array ke har element ke upar function apply karne ke liye hota hai. Yeh ek new array return karta hai, 
// jisme function ke processed results hote hain.

// Example

let arrayMap = [1, 2, 3, 4, 5];
let mapArray = arrayMap.map((value)=> {
    return value * 2;
});

console.log(mapArray);



// filter
// filter() JavaScript ka ek array method hai jo ek nayi array return karta hai. Yeh method un elements ko filter karta hai jo ek specified 
// condition ko satisfy karte hain. matlab jo ap ke de hue condition se milte hai. 


let arrayFilter = [10, 20, 30, 40, 50, 60, 70, 80, 100];
let filterArray = arrayFilter.filter((numbers)=> {
    return numbers % 2 === 0;
});

console.log(filterArray);



// reduce
// reauce ek javascript array method hai jo ek array ke elements ko reduce kake ek single value me convert karta hai.  
// Iska use complex calculations, total values ka sum, ya data aggregation ke liye hota hai.

// Example

let reduceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayReduce = reduceArray.reduce((acc, cur)=> {
    return acc + cur;
});

console.log(arrayReduce);



// forEach
// javascript mai forEach mehtod ka kam ya hai . ya serf array ke hr element ke apur function apply kr ta bilke array ko modify nahi kr 
// ta na new array return krta hia 

// Example

let arrayForEach = [1, 2, 3, 4, 5, 6, 7];
let forEachArray = arrayForEach.forEach(()=> {
    console.log("apply function on array elements");
});


// find
// find() JavaScript ka ek array method hai jo array ke first element ko return karta hai jo ek specified condition ko satisfy karta hai. 
// Agar koi bhi element condition match nahi kare, toh undefined return hota hai.

let arrayFind = [1,2,3,4,5,,6];
let findArray = arrayFind.find((num)=> {
    return num > 3;
});

console.log(findArray);


// object
// Object ek data structure hai jo key-value pairs ki form mein data ko store karta hai. Iska use tab hota hai jab ek entity 
// (like person, car, etc.) ke baare mein multiple details store karni ho.


// Example 

const objectPerson = {
    name: "John",
    age: 30,
    city: "New York",
    work: "Software Developer"
};



// object methods
// javascript mai object methods ka matlab ye hota hai woh function jo kisi object ka hissa hote hain aur unhe 
// use karke hum hum object ke data ko manipulate ya access kar sakte hain.

// syantx

const objMethod = {
    firstName: "Ali",
    lastName: "Ahmed",
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(objMethod.getFullName());


//prototype
// javascript mai prototype ek object hota hai jo har javascript object ke sath link hota hia. yeh ek inheritance ka banata hai, 
// jisse ek object dusre object ke properties aur methods ko access kar sakta hai. jab bi tum ek object banati ho to uska ek hidden
// [[Prototype]] prototype hota hai jo kisi aur object ko reference kar raha hota hai.


// Example
// Object Prototype

const objectPrototype = {
    name: "John Smith",
    age: "16",
    city: "New York",
};

console.log(objectPrototype);
console.log(objectPrototype.toString());

const newObj = Object.create(objectPrototype);

console.log(newObj);

// Prototype Chain
// javascript mai jab ek object dusre ke prototype se inherit karta hai, to ek Prototype Chain ban jaati hai. Jab Javascript ek 
// property ya method ko access karne ki koshish karti ha, to wo pehle us object me search kr ti hai, fir uske prototype me, aur aise 
// hi chain ke end tak jati hai.

// Example
let animal = {
    eat: true,
};

let rabbit = {
    jumpe: true,
};


rabbit.__proto__ = animal;
console.log(rabbit.eat);
console.log(rabbit.jumpe);


// prototype inheritance
// javascript mai prototype inheritance ka matlab ek object dusre object ke properties or methods ko access kar sakta hai, 
// bina unhe directly copy kiye. ya kamm prototype chain ke zariye hota hai. jab tum ek propertie ya mehtod access kr te ho to javascript
// sabse pehle us propertie ya method ko us object me search karte hai. ager wo nahi milta, to us object ke prototype jis object ka sat linked hi
// matlb jis object se inhertied ho is me search karta hai is ko prorotype inheritance kehte hain.



// function prototype
// javascript mai har function ek object hota hai. or har function automatically ek special property ke sath aata hai jisko prototype kehte hai
// ye prototype ek object hai jo function se banaye gaye object ke parent ka role play karta hai.


// . Function ke Prototype ki Default Structure
// Har function ka prototype object default me ek constructor property ke sath aata hai, jo us function ko reference karta hai.

// Example

function personF(name, age) {
    this.name = name;
    this.age = age;
};

personF.prototype.greet = function(){
    console.log(`${this.name} ${this.age}`);
};

const person1 = new personF("HEHEHAH", 30);
const sara = new personF("Eman", 17);

console.log(person1);
console.log(sara);





// Async All methods

// sync and async kaya hota hai.


// sync
// sync matlab ek ke baad dusra hoga, jab tak ek command complete naa ho, dusra shuru nahi hoga.
// async
// async matlab saare kaam ek saath shuru kardo, jiska answer pahle aajaye uska jawaab dedena

// What is async js?
// kai baar aapka final code depended hota hai kisi aur ke server par, is case mein humein nahi pata hota ki answer us server 
// se kab laut kar aayega to hum kaya nahi kr skte is wrtting sync code, isse nipatne ke liya hum log async code likh dete hai taaki blocking 
// naa ho and jab bhi answer aaye humara answer ke respect mein chalne waala code chal jaaye

// async code ka main moitive hoata hai ki un cases mein jinmein hume pata nahi code ka answer kitni der mein aayega to jab bhi answer aa jaaye 
// uske answer ke respect mein koi particular code chaka dena


// callbacks
// JavaScript mai, callback ek aisa function hota hai jo kisi aur function ke parameter ke taur par diya jata hai aur woh function ke execution
// ke baad call hota hai. Callback functions asynchronous operations ke liye bohot useful hain, jaise setTimeout, event listeners, ya API calls.


// Example

setTimeout(function(){

}, 3000);


///////////^^^^^^^^^^///////////////
////////// callbacks ///////////////


// Promises
// javascript mai promises ka use aynchronous code lehke na ka leya hota hai or promises javascript ka object hai jo ek kaam (asynchronous operation)
// ke future ko represent karta hai. Isme teen possible states hoti hain

// 01) = pending (Initial State): kaam abhi chal raha hai.
// 02) = resovel kaam complete ho gaya aur successful result mila
// 03) = Resjected kaam fail ho gaya aur koi error aayi,


// let promises = new Promise((res, rej)=> {
//      if(false) {
//         res("success")
//      } else {
//         rej("error")
//      }
// })
// promises.then(function() {
//     console.log("Success");
// }).catch(function(){
//     console.log("Error")
// });

// then and catch
// then and catch promises ke sath use hota hai ya asynchronous task ko handle kiya ja sake. ye dono methods javascript ke core functionality 
// ka hissa hain.



// then 
// then ek method hai ya tab excuted hota hai jab promise resovle hota hai (yaani jab kaam sucessfully completed hota hai. yeh resovle value ko 
// handle karne ke liye ek callback function leta hai).

// Example

// then(function(){
//     console.log(resovle);
// });


// catch
// catch bi ek method hai ya tab excuted hota hai jab promise reject hota hai (yaani jab kaam unsucessfull hota hai. yeh reject value ko 
// handle karne ke liye ek callback function leta hai).

// catch(function(){
//     console.log(reject)
// })


// Async/Await
// Async/Await ka use javascript mai is leya hota hai jab koi bhi esa function jisme aap async code likhege, kyiki async code hai
// to aap promises ka istemaal kar sakte hai, jab uska answer aayega aapko then lagana padega, us then ko lagaane se bachne ke liye, aap
// async await ka istemaal kar sakte hai.

// dekho jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein nahi pata uska answer kab aayega


// Example

// async function test() {
//     let answer = await fetch('https://uknksksi.c');
//     let data = await answer.json();
//     console.log(data)
// };

// test();



// Fetch API

// this keyword

// concurrency and parallelism
// Concurrency aur Parallelism computer science ke do important concepts hain jo asynchronous programming, multithreading, 
// aur distributed systems ko samajhne ke liye zaroori hote hain. Dono ka focus ek se zyada tasks ko handle karne par hota hai, 
// lekin inka approach aur execution alag hota hai.



// concurrency => js mein sync code and async code ek saath process ho raha tha ye hai concurrency


// parallelism => js mein focus jaada karta hai different processors and unke cores par kaam ko chalaane par

// throttling => kisi code ko control karna number of executions 
 
// try and catch
// try

// javascript mai try catch ka use error handling ka leya leya keya jata hai
// try ager muja lagata hai kio code error throw kar sakta hai, usko try block mein rakhte hain.
// ager error aata hai, to javascript directly catch block ke andeer chala jata hai.



// catch

// ager try block mein koi error aata hai, to catch block usko pakadta hai. 
// tum yaha error ko handle kar sakte ho ya useer ko ek proper message de sakte hai ke error kaya aya hai code mai. 


// Example

try {
    let a = 20;
    console.log(a.toUpperCase());
} catch (error) {
    console.log(error)
}


// iife
// iife ka use javascript mai is leya hota hai ke kahi br global scope ke polluction se problem hote hai kahi br to aus global scope ke jo bi
// variables hai ya jo bi declaration hai to aus polluction ko hatana ka leya iife ka use kr te hai

// iife ka matlab hai javascript mai Immediately Invoked Function Expressions (IIFE);
(function iife(){
    console.log(`DB CONNECTED`);
})();

// ES6+ features

// Apply bind Call
// javascript mai Apply bind and call ka use is leya hota hai jab hum ko fuction ka this context change karne ke liya use hote hain, 
// yeh teenon methods kaam toh ek jsie hi karte hain, lekin inka usage thoda alag hai,

// call
// is method ka use is leya hota hai ka ek function ko ya turant call karta hai aur this ko set karta hai kisi specific object par.

// Example

const person = {
    name: "John Smith",
    age: 30
};

function greet(text){
    console.log(`${text}, my name is ${this.name}, and my age is ${this.age}`);
};

greet.call(person, "call has a apply");

// Apply
// is method ka kaam call ki tarah hi hai, lekin aarguments ko ek array ke form mein pass karta hai.

// Example

const person2 = {
    name: "Jane Doe",
    age: 25
};

function greet2(text, symbol){
    console.log(`${text} my name is ${this.name} amd my age is ${this.age} ${symbol}`)
};

greet2.apply(person2, ["hello", "!"]);

// bind
// bind() function ka ek new copy banata hai aur usse kisi specific context ke sath memory me store karta hai. Jab aapko zarurat ho, 
// tab aap is stored function ko call karte hain.

// Example

const person3 = {
    name: "Alice Johnson",
    age: 28
}

function greet3(text, options) {
    console.log(`${text} and options is ${options}`)
};

const bindGreet = greet3.bind(person3, "text", "one is , and number two is");
bindGreet()

// Callback functions


// pure &  impure function


// closures


// Parameters and arguments


// updating objects properties


// type in js


// hoisting


// example of ternary operator


// browser context api


// execution context



// lexical enviroment


// higher order function

// constructor function

// first class function

// new keyword

// localStorage

// Memory Management

// Javascript Iterators and Generators

// Settimeout

// setinterval

// XMLHttpRequest

// Modules in javascript

// Expressions and Operators

// JavaScript Chrome Dev Tools

// Context API


// DOM Manipulation