const express = require('express')
const app = express()

// to get data
let {people} = require('./data')

// static assets (for front end)
app.use(express.static('./methods-public'))

// express.urlencoded() is a method inbuilt in express 
// to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({extended: false}))

// display data in json
app.get('/api/people', (req,res) => {
  res.status(200).json({success:true, data:people})
})

// add data
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






app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})