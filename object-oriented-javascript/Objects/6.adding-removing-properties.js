/*
Objects in javascript are dynamic, that means after you create them then you can add , delete properties in them.
 */

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(`Drawing circle of radius ${radius}`);
  }
}

const circle = new Circle(1);

// user.token = 'asdfasdfasdf'

circle.location = { x: 1, y: 1 };
const propertyName = 'location1';

circle[propertyName] = { x: 2, y: 2 };

console.log(circle);

delete circle.location1;

console.log('\n', circle);
