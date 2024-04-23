// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require('./04-names');

const {Ali} = require('./04-names');
const {Salman} = require('./04-names');

const saySalam = require('./05-utils');

const lolll = require('./06-alternative-flavor');

saySalam(Ali)

// console.log(lolll);

// console.log(names);

// saySalam(names.Ali);
// saySalam(names.Salman);
// saySalam(`Faheem`);

// The main idea is that -----> every .js file is a module & 
// when it comes to modules, we are in charge of what we are sharing

// require('./07-mind-grenade');