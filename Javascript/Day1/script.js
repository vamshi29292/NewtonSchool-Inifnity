// alert("Hello Infinity Batch!");
// alert("Second alert");

// statements and expressions
// asdlfjasljdflasj


// variables
var a = 5;


let b = 6;
b = "Hello world";
const c = 7;
let d = 5, e = 6, f = 7;

// variable names
// should start with alphabet or _ or $
// can contain alphabets, special characters and numbers
// reserved words can't be used. Eg: let, const, for, while, function, break, continue
let abc = 5;
// let a! = 5;
let a2 = 7;
// let 2a = 8; invalid
// let !a = 7; invalid

// variable names should be meaningful

//primitive types
let numberExample = 18; //Number
let infinity = Infinity //Number
let negativeInfinity = -Infinity //Number
let notANumber = NaN //Number
let ageOfUniverse = 11234; //BigInt
let name = "Vamshi"; //String
let isAwake = true; //Boolean
let city; //undefined
let criminalRecords = null; //null

let vamshi = { age: 18, name: "Vamshi", isAwake: true, criminalRecords: null }; // Object
let shubham = { name: "Shubham", isAwake: true, criminalRecords: null }; // Object
let users = [ vamshi, shubham ]; //Array

console.log('shubham: ', shubham);
console.log('typeof shubham: ', typeof shubham);

//typeof operator
console.log('typeof age: ', typeof(numberExample));
console.log('typeof users: ', typeof users);
console.log('typeof null: ', typeof null);
console.log('typeof undefined: ', typeof undefined);

// alert shows a popup.
// alert("Hello there Infinity Batch")
console.log("Paused for alert")

//prompt accepts user input and return the data;
// let shubhamAge = prompt("Enter your age: ");

//confirm asks user yes or no question
// let userAgreed = confirm("Are you sure?");
// console.log('userAgreed', userAgreed);


//Type conversions
let stringExample = "55";
// let convertedUsingUnary = +stringExample;
let convertedToNumber = Number(stringExample);
console.log(typeof stringExample, typeof convertedToNumber)

let invalidConversion = Number("abcd");
console.log(invalidConversion) //NaN = Not a number;
console.log(typeof invalidConversion);


//falsy values = false, 0, '', undefined, null
let convertedToBoolean = Boolean("abcd");
console.log('convertedToBoolean', convertedToBoolean)

//operator, operand
// 5 + 7 => + is the operator and 5, 7 are operands

//operators => unary or binary
let x = 5++; //unary  operator

let y = 4 ** 2 // y = 4^2 = 16

let twoStringAdded = "abcd" + "xyz"; //"abcdxyz"

