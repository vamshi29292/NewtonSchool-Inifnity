let user0 = new Object(); //constructor function syntax

//Objects are a collection of key value pairs
// values can be any valid javascript value - primitives, object, array, function
// keys can either be a string or a Symbol.

let user1 = {
  name: "Akshay Rathore",
  "Is Available": true,
  age: 18,
  languages: ["Hindi", "English", "Malwi"],
  batch: "Infinity",
  credentials: {
    userId: "abcd",
    password: "xyz",
  },
  "!67": 6,
  "5": 7,
}; //Object literal syntax

//if key follows variable naming rules dot notation can be used
//else square brackets need to be used.
console.log("age = ", user1.age)
console.log(user1["Is Available"])
console.log(user1["name"])

let a = "name";
console.log(user1[a]);
console.log(user1.credentials.userId)

user1.age = 20;
user1.criminalRecords = null;
console.log("age = ", user1.age);
console.log(user1);

//object equality
let object1 = {};
let object2 = {};
let object3 = object1;
console.log(object1 === object2);
console.log(object3 === object1);
object3.x = 2;
console.log(object1.x);

//methods
user1.introduceSelf = function() {
  console.log("Hi I'm Akshay");
}

user1.introduceSelf();

//"this" keyword
