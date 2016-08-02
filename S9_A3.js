
var event = require('events');
var eventEmitter = new event.EventEmitter();

var handler =  function handle(){console.log("i am going to handle the event");}
eventEmitter.emit('newEvent');
eventEmitter.on('connection',handler);
eventEmitter.on('newEvent',function(){console.log("hey");});
eventEmitter.emit('connection');
console.log("ending");
