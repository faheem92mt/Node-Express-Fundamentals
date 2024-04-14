const express = require('express')
const app = express()

// to get data
let people = require('./routes/people')

let auth = require('./routes/auth')

// static assets (for front end)
app.use(express.static('./methods-public'))

app.use('/api/people', people);

app.use('/login', auth);

// parse json
app.use(express.json())

// express.urlencoded() is a method inbuilt in express 
// to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({extended: false}))



app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})