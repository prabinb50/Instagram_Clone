// 1.  JAVASCRIPT  DEFINITION
// -> JS is the object-oriented client-side scripting language. 
// -> In early days, js was only used in browser for interactivity.
// -> Later js was used in sever side  also after thee intoduction of node.js.


// This is Loki Chaulagain From Tikapur Kaialai



// 2. VARIABLES IN JS
// -> Variables are the containers to store the data values.
// -> In js, we declare variables using var, let, and const.

// Var
// -> It is old way of declaring  variables (dont use it in modern js)
// -> It supports both re-declaring and re-assigning the variable
var a = 11;
console.log(a);

// re-declaring the variable
var b = 18;
var b = 20;
console.log(b);

// re-assigning the variable
var c = 30;
c = 40;
console.log(c);

// Let
// -> It is recommended way of declaring variales in modern js.
// -> In let, re-declaring is not possible
// -> It support the re-assigning the variable

// re-assigning the variable
var d = 30;
d = 70;
console.log(d);

// Const
// -> It is recommended way of declaring variales in modern js
// -> In let, re-declaring and re-assigning are not possible



// 3. UNDEFINED AND NULL
// -> When we declare variable and not assign any value to it, is known as undefined.
var myname;
let surname;
console.log(myname);
console.log(surname);

// -> Value is given to the varibales but the value is empty is called null.
let abc = null;
var xyz = null;
console.log(abc);
console.log(xyz);



// 4) OPERATORS IN JS
// -> Operators are used to perform logical, mathematical, and comparison operations.

// Assignmnet Operators
// -> It is used to assign the value to the variable
const prabin = 50;
const haha = 100;

// Comparison Operators
const lama = 1;
const yangma = 2;

// Greater than (>)
console.log(lama > yangma);

// Less than(<)
console.log(lama < yangma);

// Addition Operators (+)
console.log("Addition operator is:", lama + yangma);

// Subtraction Operators (-)
console.log("Subtraction operator is:", lama - yangma);

// Multiplication Operators (*)
console.log("Multiplication operator is:", lama * yangma);

// Division Operators (*)
console.log("Division operator is:", lama / yangma);


// Value equal to operator (==)
const value1 = 10;
const value2 = "10";
console.log(value1 == value2);

// Value not equal to operator (!=)
console.log(value1 != value2);

// Type equal to operator (===)
console.log(value1 === value2);

// Type not equal to operator (!==)
console.log(value1 !== value2);

// Greater then or qual to operator (>=)
const ab = 5;
const cd = 6;
console.log(ab >= cd);

// Less then or qual to operator (<=)
console.log(ab <= cd);

// Conditional Operator ( ? :) (Short form of if else)
const criteriaAge = 20;
const studentAge = 17;
console.log(studentAge > criteriaAge ? "Yes you are eligible" : "you are not");

// Increment Operator (++)  (It increses the value by 1)
let increment = 10;
increment++;
console.log(increment);

// Decrement Operator (--)  (It decreses the value by 1)
let decrement = 10;
decrement--;
console.log(decrement);




