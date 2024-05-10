let {people} = require('../data')

const getPeople = (req,res) => {
    // data is format and people is imported
    res.json({data:people})
}

const createPerson = (req,res) => {
    const {name} = req.body;
  
    res.status(201).json({person: name})
}

const createPersonPostman = (req,res) => {
    const {name} = req.body
  
    res.json({success: true, data: [...people, name]})
}

const updatePerson = (req,res) => {
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
}

const deletePerson = (req,res) => {
    // const {id} = req.params;
    
    const person = people.find((person) => person.id === Number(req.params.id))
  
    if (!person) {
      return res.status(404).json({success:true, msg: `no such person with id = ${req.params.id}`})
    }
  
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
  
    return res.status(200).json({success:true, data: newPeople})
}

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}