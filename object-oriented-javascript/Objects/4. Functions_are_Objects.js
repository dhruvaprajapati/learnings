// One of the confusing concept in javascript is
// Functions are Objects


// Constructor method
function Circle(radius) {
  console.log('This', this);
  this.radis = radius;
  this.draw = function() {
    console.log(`drawing circle with radius ${radius}`);
  }
}
// Creating an Object
// const circle = createCircle(1);

console.log(Circle.name);
console.log(Circle.length);

// Internally javascript uses Function() Constructor to create above
console.log(Circle.constructor);


Circle.call({}, 1); // is exactly same as new Circle(1);

Circle.apply({}, [1,2,3]);

// below is the example

const Circle1 = new Function('radius', `
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
`);

const another = new Circle1(5);

console.log(another);