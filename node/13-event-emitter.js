// #1 If you want to create something custom, you need to extend the class
// #2 If you simply want to Emit an event as well as listen for it, then you can just create the instance
// we are doing #2 here

// we are getting the class in this variable 'EventEmitter' and then later we create an object of the class
const EventEmitter = require('events');

// an object of the class EventEmitter
const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event

// the order of placing the code of on and emit is imp...
// if you place emit before on, it wont work

// we can use additional arguements too
customEmitter.on('response', (name, id)=> {
    console.log(`data received ${name} with ${id}`);
})

customEmitter.on('response', ()=> {
    console.log(`some other logic here `);
})

customEmitter.emit('response', 'faheem', 26)

// even though you might not write your own events,
// events are a core building block of node -> a lot of built-in modules rely on them