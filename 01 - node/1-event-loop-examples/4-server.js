// async code will go to event queue and then be FIFO (first in - first out)

const http = require('http')

// #1
const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

// #2
server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})