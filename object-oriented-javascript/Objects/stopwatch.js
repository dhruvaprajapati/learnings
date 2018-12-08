/*
Stopwatch with properties
duration
set
start
stop

Initial duration is 0;
start() then it will start the stopwatch and if you start again it should scream error.
stop() agian we should call stop in row
duration() will give the time for the counted seconds
reset() will set the counter to 0;

*/

function StopWatch() {
  let startTime, endTime, running, duration = 0;
  this.start = function() {
    if(running) {
      throw new Error('Stopwatch is already running');
    }
    running = true;
    startTime = new Date();
  };
  this.stop = function(){
    if(!running){
      throw new Error('Stopwatch is not running');
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };
  this.reset = function(){
    startTime = null;
    endTime = null;
    duration = 0;
    running = false;
  };
  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

const sw = new StopWatch();
console.log('Duration is', sw.duration);