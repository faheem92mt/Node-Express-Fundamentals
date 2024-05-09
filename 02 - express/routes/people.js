// for /api/people

const express = require('express')
// instead of setting up app, we go with router 
// and we get it from express
const router = express.Router()

let {people} = require('../data')

router.get('/', (req,res) => {
    // data is format and people is imported
    res.json({data:people})
})


router.post('/', (req,res) => {
    const {name} = req.body;
  
    res.status(201).json({person: name})
})

router.post('/postman', (req,res) => {
    const {name} = req.body
  
    res.json({success: true, data: [...people, name]})
})
  
router.put('/:id', (req,res) => {
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
  
router.delete('/:id', (req,res) => {
    // const {id} = req.params;
    
    const person = people.find((person) => person.id === Number(req.params.id))
  
    if (!person) {
      return res.status(404).json({success:true, msg: `no such person with id = ${req.params.id}`})
    }
  
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
  
    return res.status(200).json({success:true, data: newPeople})
})

module.exports = router
  