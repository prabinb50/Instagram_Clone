
// DATA TYPES IN JAVASCRIPT
//--> Classification of data into different types is called data types.
// --> In javascript data types are classified into two types.
// 1. Primitive data types
// 2. Non-primitive data types

// 1. Primitive data types
//--> Those having single value are called primitive data types.
// Exapple: const a=10; const b="hello", const status=true;
//-->There are 6 primitive data types in javascript.
// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. BgInt // above 15 digit number

// 2. Non-primitive data types
//--> Those having multiple values are called non-primitive data types.
// Example: const students=["ram","raj","ravi"];
//-->There are 3 non-primitive data types in javascript.
// Object (Object ,Array, Function)
// 1. Object
// 2. Array
// 3. Function

// 1. Number
const a = 10;
const b = 10.464587454;
console.log(a);
console.log(b);
console.log(typeof a);

// Method in Number (toString(),toFixed())
const c = a.toString();
console.log(typeof c);
console.log(c);

const d = b.toFixed();
console.log(d);

// 2. String
const username = "lokichaulagain";
const surname = "loki-chaulagain";
console.log(username);

// Method in String (toUpperCase(),toLowerCase(),length,chatAt(),slice(),split())
const e = username.toUpperCase();
console.log(e);

const f = username.toLowerCase();
console.log(f);

console.log(username.length);
console.log(username.charAt(3));
console.log(username.slice(0, 4));

console.log(surname.split("-"));
console.log(surname.split("-")[0]);
console.log(surname.split("-")[1]);

//3. Boolean-->Its always returns true or false.
const isAdmin = true;
console.log(isAdmin);

const g = 10;
const h = 20;
console.log(g > h);

// bigInt
const i = 1234567890123456789012345678901234567890n;
console.log(i);
console.log(typeof i);

// Object
//-->Collection of key values pars under the same name is called object.
const person = {
    name: "lokichaulagain",
    age: 20,
    college: "Nepal Engineering College",
    address: "Kathmandu",
};
console.log(person);

// Method of object (Object.keys(),Object.values(),Object.entries())
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(Object.keys(person)[0]);
console.log(Object.values(person)[1]);
console.log(Object.entries(person)[1][1]);

// Array
//--> Collection of similar data type under same name is called array.
// Example : const students=["ram","raj","ravi"];

// Array can be further classified into two types.
// 1. Array of string
// 2. Array of object

// Array od String
// Array made from collection of string is called array of string.
const students = ["ram", "raj", "ravi"];
console.log(students);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

// Array of Object
// -->Collection of object under the same is called array of object.
const people = [
    {
        name: "lokichaulagain",
        age: 20,
    },

    {
        name: "ram",
        age: 25,
    },

    {
        name: "ravi",
    },
];
console.log(people);
console.log(people.length);
console.log(people[0]);
console.log(people[0].name.toUpperCase());
console.log(people[0].name.slice(0, 4).toUpperCase());

// Methods of array (push())
const newPeople = {
    name: "raj",
    age: 30,
};
console.log(people.push(newPeople));
console.log(people);
