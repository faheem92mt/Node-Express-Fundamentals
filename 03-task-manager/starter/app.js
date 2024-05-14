console.log('Task Manager App')

const express = require('express');
const app = express();

const connectDB = require('./db/connect')
require('dotenv').config()

// UI - front end
app.use(express.static('./public'))
// to parse json data as req.body
app.use(express.json())

// importing router
const router = require('./routes/tasks')
// using router as a middleware
app.use('/api/v1/tasks', router);

// just for fun
app.get('/hello', (req,res) => {
    res.send("Hello Task Manager App")
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        
        app.listen(3000, ()=> {
            console.log("Server is listening on port 3000");
        })
    } catch (error) {
        console.log(error);
    }
}

start()