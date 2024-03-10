// console.log('Express Tutorial')

// creating an object called http
const http = require('http');

// on the object 'http', we have a method called 'createServer' 
// the method 'createServer' takes a callback which is going to be invoked everytime 
// the user hits our server...
const server = http.createServer( (req,res) => {
    // console.log('user hit the server');

    const url = req.url;

    if (url === '/') {
        res.writeHead(200, {'content-type' : 'text/html'})

        // 'res' is the response object to respond to the browser in a meaningful manner
        res.write('<h1>Home Page</h1>');
        // 'end' means the communication is over/finished
        // somewhere saw send ; but here end
        res.end();
    }
    else if (url === '/about') {
        
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();

    }
    else {

        res.writeHead(404, {'content-type':'text/html'});
        res.write('<h1>Error 404 Not Found</h1>');
        res.end();
    }

    
    
})

server.listen(5000);