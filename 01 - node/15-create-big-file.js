// STREAMS - used to read/write sequentially - when we have to handle/manipulate streaming data - 
// for example
// ... a continuous source or a big file

// Just like with events, many built-in modules in node implement streaming interface
// Streams extend <EventEmitter> class...
// meaning... we can use events like data 

const { writeFileSync } = require('fs')
for (let i = 0; i < 100000; i++) {
  writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}

