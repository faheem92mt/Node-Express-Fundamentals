const express = require('express')
const app = express()

// to get data
let {people} = require('./data')

// static assets (for front end)
app.use(express.static('./methods-public'))

// parse json
app.use(express.json())

// express.urlencoded() is a method inbuilt in express 
// to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({extended: false}))



// display data in json
app.get('/api/people', (req,res) => {
  res.status(200).json({success:true, data:people})
})

// add data (url encoded)
app.post('/login', (req,res) => {
  // console.log(req.body);
  // res.send('post')

  const { name } = req.body

  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }

  res.status(201).json({ success: true, person: name })

})

// add data (json)
app.post('/api/people', (req,res) => {
  const {name} = req.body;

  if (!name) {
    return res.status(400).json({success:false, msg: 'pls provide name value'})
  }

  res.status(201).json({ success: true, person: name })
})

// postman
app.post('/api/postman/people', (req,res) => {
  const {name} = req.body;

  if (!name) {
    return res.status(400).json({success:false, msg: 'pls provide name value'})
  }

  res.status(201).send({success: true, data: [...people, name]});
})

app.put('/api/people/:id', (req,res) => {
  
})







app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})