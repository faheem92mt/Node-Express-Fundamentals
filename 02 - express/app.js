const express = require('express')
const app = express()

let {people} = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.post('/login', (req,res) => {
  const {name} = req.body;

  res.status(200).send(`Welcome ${name}`)
})

app.get('/api/people', (req,res) => {
  // data is format and people is imported
  res.json({data:people})
})

app.post('/api/people', (req,res) => {
  const {name} = req.body;

  res.status(201).json({person: name})
})

app.listen(5000, ()=> {
  console.log("Server is listening on port 5000");
})