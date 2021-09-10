// function introduceSelf(firstName, lastName) {
//   function getFullName() {
//     return firstName + " " + lastName;
//   }
//   console.log("Hi! I am " + getFullName());
// }

// function multiplyNumbers(a, b) {
//   return a * b;
// }

// Closure
// A closure is a function that remembers its outer variables and can access them. 
// MDN definition: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// they automatically remember where they were created using a hidden [[Environment]] property, and then their code can access outer variables.

// in JavaScript, all functions are naturally closures (there is only one exception, to be covered in The "new Function" syntax)

function createMultiplier(n) {
  let y = 5
  return function (x) {
    // console.log(y);
    return n * x;
  }
}


const multiplyBy5 = createMultiplier(5);
const multiplyBy6 = createMultiplier(6);
const multiplyBy7 = createMultiplier(7);

const result = multiplyBy5(20);
const result2 = multiplyBy6(20);

console.log(result);
console.log(result2);
// introduceSelf("Vamshi", "Palreddy");