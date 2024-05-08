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

app.post('/api/postman/people', (req,res) => {
  const {name} = req.body

  res.json({success: true, data: [...people, name]})
})

app.put('/api/people/:id', (req,res) => {
  const {id} = req.params;
  const {name} = req.body;

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res.status(404).json({success: false, msg: `no person found with id = ${id}`})
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })

  res.status(200).json({success: true, data: newPeople})
})

app.delete('/api/people/:id', (req,res) => {
  // const {id} = req.params;
  
  const person = people.find((person) => person.id === Number(req.params.id))

  if (!person) {
    return res.status(404).json({success:true, msg: `no such person with id = ${req.params.id}`})
  }

  const newPeople = people.filter((person) => person.id !== Number(req.params.id))

  return res.status(200).json({success:true, data: newPeople})
})



app.listen(5000, ()=> {
  console.log("Server is listening on port 5000");
})