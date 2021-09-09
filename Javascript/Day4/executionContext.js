//js is execution is run in two phases.
// 1. Creation Phase and 2. Execution Phase.
// Creation Phase - Is run each time on a function invocation and creates an execution context for the function.
// Execution Phase - Runs after creation phase and until the end of the function.

// ExecutionContext - Simply put, an execution context is an abstract concept of an environment where the Javascript code is evaluated and executed. Whenever any code is run in JavaScript, it’s run inside an execution context.

// Global execution context created at the beginning of the script.

console.log(a);
sayHi();
sayBye();

function sayHi() {
  console.log(a);
  console.log("Hello World");
}

function sayBye() {
  var a = "FooBar";
  console.log(a);
  sayHi();
  console.log("Bye");
}

var a = "Blah";