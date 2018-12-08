
// Object Literal Syntax
// Object literal method is not a good way to create an object and duplicate it if object have atlease one method
// if an object have more that one method - we say that object have behaviour, like person it can do different things
// So creating object with the object literal syntax is and issue only if that object have behaviour

// below is the solution using factories and Constructor


// Factory Function
function createCircle(radius){
  return {
    radius,
   // Below is function or a method is used to define login
    draw: function () {
      console.log(`drawing circle with radius ${radius}`);
    }
  }
}

// Creating an Object
const circle = createCircle(1);

// calling function using dot notation
circle.draw();


// Constructor Function - Naming convention is to declare with uppercase, like we declare Classes in Other function
// In javascript we don't have concept of classes

function Circle(radius) {
  console.log('This', this);
  this.radis = radius;
  this.draw = function() {
    console.log(`drawing circle with radius ${radius}`);
  }
}

// Creating another circle

// On Below commented we are not using new keyword, in this case this belongs to global object
// i.e window on browser and process on node side

// const anotherCircle = Circle(2);

const anotherCircle = new Circle(3);

anotherCircle.draw();

// NOTE:

// Which method to use to create object, it really doesn't matter, its a choice other devs from different language have
// concept of classes to they prefer to use constructor method, but in JS we dont have concept of Classes
// So choose pattern which you prefer.

