console.log('Task Manager App')

const express = require('express');
const app = express();

const connectDB = require('./db/connect')
require('dotenv').config()

app.use(express.static('./public'))
app.use(express.json())

// importing router
const router = require('./routes/tasks')
// using router as a middleware
app.use('/api/v1/tasks', router);

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