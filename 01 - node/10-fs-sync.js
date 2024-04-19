// var fs = require('fs');
// const first = fs.readFileSync('./content/first.txt', 'utf8');
// const second = fs.readFileSync('./content/second.txt', 'utf8');


// var person = {
//     age: 26,
//     name: 'Faheem',
//     major: 'Soft Eng'
// }


//Syntax Error ------->
// var person = {
//     26,
//     'Faheem',
//     'Soft Eng'
// }

// clearly this is a new fancy thing
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');


// console.log(person.age);
console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`)

// to append ------->
// writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, {flag: 'a'})