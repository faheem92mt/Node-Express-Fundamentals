console.log('Task Manager App')

const express = require('express');
const app = express();

app.use(express.static('./public'))
app.use(express.json())

// importing router
const router = require('./routes/tasks')
// using router as a middleware
app.use('/api/v1/tasks', router);

app.get('/hello', (req,res) => {
    res.send("Hello Task Manager App")
})

app.listen(3000, ()=> {
    console.log("Server is listening on port 3000");
})