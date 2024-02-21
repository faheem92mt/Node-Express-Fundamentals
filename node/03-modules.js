// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const saySalam = require('./5-utils');

const lolll = require('./6-alternative-flavor');

// console.log(lolll);

// console.log(names);

// saySalam(names.Ali);
// saySalam(names.Salman);
// saySalam(`Faheem`);

// The main idea is that -----> every .js file is a module & 
// when it comes to modules, we are in charge of what we are sharing

require('./7-mind-grenade');