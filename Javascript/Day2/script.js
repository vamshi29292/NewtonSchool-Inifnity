// let a = 0, b = 8;

// let isAGreaterThanB = a > b;

// console.log(isAGreaterThanB)
// console.log(a >= b);

// // equality checks
// let c = 6;
// let d = '6';
// console.log('loose equality check', c == d);
// console.log('strict Equlity check', c === d);

// //type coercion
// let x = c + d; // let x = '6' + '6'
// let y = d + c;
// console.log('x', x);
// console.log('y', y);
// console.log("undefined and null loose equality", undefined == null);
// console.log("undefined and null strict equality", undefined === null);

// //if else
// if (a > b) {
//   console.log("a is greater than b");
// } else if (a == b) {
//   console.log("a is equal to b");
// } else {
//   console.log("a is less than b");
// }

// if (a) {
//   console.log("a", a);
// }
// let z = 0;
// if (z) {
//   console.log("z", z);
// }

// //falsy values => 0, NaN, undefined, null, ""
// //Nullish coalescing operator
// let aOrB = (a || b || c);
// console.log("aOrB", aOrB);
// let cAndD = (a && c && d);
// console.log("cAndD", cAndD);

// // let age = Number(prompt("Enter age")) || 18;
// // //let age = '' || 18;
// // console.log("age", age);

// // let numberOfCrimes = Number(prompt("Enter number of crimes committed")) ?? 5;
// // console.log("crimes", numberOfCrimes);

// // a ?? b => a if not undefined or null, else b

// //while loop
// // while(condition) {
// //   //keep doing something
// // }

// //do while loop
// // do {
// //   //loop body
// // } while (condition)

// //for loop
// // for (begin; condition; step) {
// //   //loop body
// // }

// // for (let i = 0; i < 5; i++) {
// //   if (i === 3) continue;
// //   console.log("i", i)
// // }

// //break: to break out of a loop
// //continue: to stop current iteration and jump to next;

// // for (let i = 0; i < 4; i ++) {
// //   let j = 0;
// //   innerLoop: for (; j < 2; j ++) {
// //     if (i === 3) break innerLoop;
// //     console.log("ij", i, j)
// //   }
// // }

// //switch statement
// switch(c) {
//   case 1:
//     console.log("c equal to 1");
//     break;
//   case 6:
//     console.log("c equal to 6");
//     break;
//   case 5:
//     console.log("c equal to 5");
//     break;
//   default:
//     console.log("c not found");
//     break;
// }

// switch(true) {
//   case(5 > 6):
//     console.log("five greater than six");
//     break;
//   case( 5 === 5):
//     console.log("five equal five");
//     break;
//   default:
//     console.log("Nothing");
//     break;
// }

//Function
// function addNumbers(a = 4, b = 5) {
//   return a + b;
// }

// console.log(addNumbers(7, 6));

// //Function expressions
// let subtractNumbers = function (a, b) {
//   return a - b;
// }

// //Arrow functions
// const multiplyNumbers = (a, b) => a * b;
// console.log(multiplyNumbers(5, 6));

// const squareNumber = a => a**2;



// console.log(subtractNumbers(16, 9));
// console.log(applyFunction(addNumbers, 7, 8));
// console.log(applyFunction(subtractNumbers, 16, 9));


//Hoisting

//scope
//var declarations are function scoped.
//If variable not available within the function scope it will be fetched from the nearest outer scope.
var a = 6;
var exponent = 3;

function addNumbersAndSquare (c, d) {
  var exponent = 2;
  console.log(exponent);
  return (c + d) ** exponent;
}

console.log(exponent);

//let and const declarations are block scoped.
function doubleIfEven(a) {
  if (a % 2 == 0) {
    let multiplier = 2;
    console.log(multiplier);
    return a * 2;
  }
  // console.log(multiplier);
  return a;
}

// console.log(addNumbersAndSquare(4, 5));
// console.log(a);
console.log(addNumbersAndSquare(5, 6));


//Higher order function.
// Is a function that accepts another function as argument or returns another function
// //Functions are values. Can be passed around like other value
// //Functions passed to other functions are called callbacks
function applyFunction(fn, a, b) {
  //More code
  return fn(a,b);
}

function getMultiplicator(x) {
  return (
    function(y) {
      return x * y
    }
  )
}

const multiplyBy5 = getMultiplicator(5)
const multiplyBy6 = getMultiplicator(6);

console.log(multiplyBy5(4))
console.log(multiplyBy6(4));

//Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
