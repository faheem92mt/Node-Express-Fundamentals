const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()

// emits request event
// subscribe to it/ listen for it / respond to it
server.on('request', (request, response) => {
    response.end('Welcome');
})
// 'request' is specific and not random btw which is on line #12 -> can't put req or something else

// following is extra info - good to know --->
// class 'http.Server' extends 'net.Server' extends <EventEmitter>
// net.server is used to create a TCP or IPC server


server.listen(5000);