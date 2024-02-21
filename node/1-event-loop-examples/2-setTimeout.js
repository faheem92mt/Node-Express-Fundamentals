//started operating system process

console.log('first');

//INTERESTING!!!
// Even though its 0 time - it will execute last - simply because of its async nature
setTimeout( () => {
    console.log('second');
}, 0)

console.log('third');
// completed and exited operating system process