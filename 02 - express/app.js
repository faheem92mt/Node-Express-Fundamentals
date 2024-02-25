// console.log('Express Tutorial')

// creating an object called http
const http = require('http');

// on the object 'http', we have a method called 'createServer' 
// the method 'createServer' takes a callback which is going to be invoked everytime 
// the user hits our server...
const server = http.createServer( (req,res) => {
    
    console.log('user hit the server');

    res.writeHead(200, {'content-type' : 'text/html'})

    // 'res' is the response object to respond to the browser in a meaningful manner
    res.write('<h1>home page </h1>');
    // 'end' means the communication is over/finished
    
    res.end();
    
})

server.listen(5000);