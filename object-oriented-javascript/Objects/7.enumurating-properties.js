function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log(`Drawing circle with radius ${radius}`);
  }
}

const circle = new Circle(1);

for (let key in circle) {
  if (typeof circle[key] !== 'function')
    console.log(key, ' ', circle[key])
}

// other ways to get all the keys from and object in array

const keys = Object.keys(circle);
console.log(keys);

if('radius' in circle) {
  console.log('Circle has a radius');
}