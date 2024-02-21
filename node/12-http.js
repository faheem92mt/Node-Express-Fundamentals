const http = require('http')

// first parameter represents -> incoming request (a client is requesting from the web browser, your webpage - info about method etc)
// second parameter represents -> what we're sending back

const server = http.createServer( (incomingRequest, response) => {
    
    if (incomingRequest.url === '/') {
        response.end('Welcome to our home page')
    } 
    else if (incomingRequest.url === '/about') {
        response.end('Here is our short history')
    } 
    else {
        response.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(5000)