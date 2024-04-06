const express = require('express')
const app = express()

const logger = require('./logger')
const authorize = require('./authorize')

const morgan = require('morgan')

// Middleware can be custom (your own), provided by express, or third-party

// app.use has to be placed before the .get
// basically the middleware has to be placed before the route methods
// THIS is how use a single middleware
// app.use(logger);

// THIS is how use multiple middlewares
// app.use([logger, authorize]);

app.use(morgan('tiny'))

// this will apply the middleware to all the urls that start with /api
// app.use('/api', logger);

// req => middleware => res u 

app.get('/', (req,res) => {
  res.send("Home")
})

app.get('/about', (req,res) => {
  res.send("About")
})

app.get('/api/products', (req,res) => {
  res.send("Products")
})

app.get('/api/items', (req,res) => {
  console.log(req.user)
  res.send("Items")
})

// to use only for one app. method
// app.get('/api/items', [logger, authorize] , (req,res) => {
//   console.log(req.user)
//   res.send("Items")
// })

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
