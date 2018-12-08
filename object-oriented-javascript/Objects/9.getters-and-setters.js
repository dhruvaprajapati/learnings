
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function() {
    return defaultLocation;
  };
  this.draw = function() {
    console.log(`Drawing circle of radius ${radius}`)
  };
  Object.defineProperty(this, 'defaultLocaiton', {
    get: function () { // get is the special keyword to declare the getter here
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y ){
        throw new Error('Invalid Location'); // Error is a build in constructor
      }
      defaultLocation = value;
    }
  })
}

const circle = new Circle(1);
circle.draw();

circle.defaultLocaiton = { x: 20, y: 20};
console.log(circle.getDefaultLocation());
console.log(circle.defaultLocaiton); // For this we have defined a property using Object.defineProperty



