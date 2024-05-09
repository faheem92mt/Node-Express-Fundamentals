const express = require('express')
const app = express()

// importing the router
const people = require('./routes/people')
const auth = require('./routes/auth')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())


// using the router as a middleware
app.use('/api/people', people)
app.use('/login', auth)


app.listen(5000, ()=> {
  console.log("Server is listening on port 5000");
})