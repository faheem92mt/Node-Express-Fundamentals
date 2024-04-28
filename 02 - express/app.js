const express = require('express')
const app = express()

let {people} = require('./data')

// to use static assets - to start off the homepage at index.html
app.use(express.static('./methods-public'))

// parse form data - ???
app.use(express.urlencoded({ extended: false }))




// for regular form
app.post('/login', (req, res) => {
  const { name } = req.body

  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

// for js form - this is from where - the js form fetches data
app.get('/api/people', (req,res) => {
  res.status(200).json({success:true, data:people})
})

app.post('/api/people', (req,res) => {
  console.log("hello");
})







app.listen(5000, ()=> {
  console.log("Server is listening on port 5000");
})