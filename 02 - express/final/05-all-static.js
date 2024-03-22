const express = require('express');
const path = require('path');

const app = express();

// const absolute = path.resolve(__dirname, './navbar-app/index.html');
// console.log(absolute);


// setup static and middleware - this will make available access to resources
app.use(express.static('./public'))
// so what is static asset? we need to understand this first...
// its a file that server doesnt have to change it
// so just dump all the assets like images (jpg) or css style file or javascript file and such in the 'public' folder
// thanks to express, we dont have to set up the paths, the mime types, status codes




// app.get('/', (req,res) => {

//     // res.sendFile('./navbar-app/index.html'); // this dont work

//     // option 1
//     // res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));

//     // option 2 - adding to static assets i.e using from the 'public' folder
//     // index.html is always going to be a root
//     // so when the user hits the server, by default the server will serve the index.html...
//     // .. from the public folder

//     // option 3 - server side rendering - to dynamically display content
//     // for example - to show the name of the user who has logged in
//     // we need to use template engine for that
// })




app.all('*', (req,res) => {
    res.status(404).send('resource not found');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})
