/*
// IN a NUTSHELL

Primitive are copied by their values
Objects are copied by their reference type

// 1. Value type OR Primitive Type OR Objects

Number
String
Boolean
Symbol // New in ES6
undefined
null

// 2. Reference Type.

Objects
Functions
Arrays
 */

// Below is completly independent for each other

let x = 10;
let y = x;

x = 20;

console.log(x);
console.log(y);

// --------------------------------------

let a = { value: 10 };
let b = a;

a.value = 20;

console.log('a ', a);
console.log('b ', b);

// --------------------------------------


let number = 10;

function increase(number) {
  number++;
}

increase(number);
console.log('number ', number); // 10 not 11


// --------------------------------------


let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log('obj value number ', obj); // 11 not 10