var http = require('http');
var fs = require('fs');

http
    .createServer( (request,response) => {
        
        // const text = fs.readFileSync('./content/big.txt', 'utf8');
        // response.end(text);

        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        fileStream.on('open', ()=> {
            fileStream.pipe(response);
        })
        fileStream.on('error', (err)=> {
            response.end(error);
        })

    })
    .listen(5000);