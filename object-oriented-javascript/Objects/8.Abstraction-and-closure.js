/*
Abstraction : Means hide the details and complexity and show or expose only essentials

Closures: In contrast to scope we have closures, a closures determines what variable will be accessible to an
inner function, so inner function will access all local variable as well variable defined in its parents
scope is temporary, but closure stays there.

when we call draw method - everytime x,y will get created and will die as soon as method completed.
but computeOptimumLocation is a closure for inner function draw.
 */


function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor){
    console.log('factor', factor);
  };
  this.radius = radius;
  this.draw = function() {
    let x = 10;
    let y = 20;
    computeOptimumLocation(0.1);
    console.log(`Drawing circle of radius ${radius}`)
  };
}

const circle = new Circle(1);
circle.draw();
