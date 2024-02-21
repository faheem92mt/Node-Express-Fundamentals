const {readFile} = require('fs');

console.log('started a first task');

//CHECK FILE PATH!!!

// the 3rd parameter is the callback function - since this is asynchronous, this will be delayed...
// until all synchronoys code is executed
readFile('./content/first.txt', 'utf8', (error, result) => {
    
    if(error) {
        console.log(error);
        return;
    }

    console.log(result);
    console.log('completed first task');

})

console.log('starting next task');
console.log('------------------');