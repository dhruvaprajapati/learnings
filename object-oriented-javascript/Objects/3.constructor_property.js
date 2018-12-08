// Every Object in javascript has a property called constructor and that references
// that function that was used to construct or to create that object

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

function Circle(radius) {
  console.log('This', this);
  this.radis = radius;
  this.draw = function() {
    console.log(`drawing circle with radius ${radius}`);
  }
}
// Creating another circle
const anotherCircle = new Circle(3);


// Checking of constructor property in for an object
console.log(circle.constructor());
console.log(anotherCircle.constructor());


let x = {}; // when we use this object literal syntax to create object,
// javascript engine internally translate it to
// let x = new Object();

// In javascript we have few other build in Consturctors

// new String() - for creating string - but we use '', "", `` to create one because it is cleaner
// new Boolean() - true, false
// new Number() - 1, 2, 3, 4,


// NOTE: Try to do this example in browser for proper understanding.