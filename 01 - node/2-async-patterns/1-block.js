const http = require('http')



// creating the server with its features and configurations
// first parameter represents -> incoming request (a client is requesting from the web browser, your webpage - info about method etc)
// second parameter represents -> what we're sending back
const server = http.createServer( (incomingRequest, response) => {
    
    if (incomingRequest.url === '/') {
        response.end('Welcome to our home page')
    } 
    else if (incomingRequest.url === '/about') {
        //Blocking code - this will block the server i.e make it busy for a while
        //This will overload the server and make other users unable to get their request
        for(let i = 0; i<50; i++) {
            for(let j = 0; j<50; j++) {
                console.log(`${i} ${j}`);
            }
        }
        // response.end('Here is our short history')
        response.end('2')
    } 
    else {
        response.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
})



// now the created server is active and working based on previous configurations
server.listen(5000)