// now lets build a more meaningful API
// in the process, we plan to cover route parameters & query string parameters

const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
  
    // mapping over -> creating a new array called 'newProducts'
    // reference each item as a product
    // 
    const newProducts = products.map((product) => {
      const { id, name, image } = product
      return { id, name, image }
    })
  
    res.json(newProducts)
    
  })

app.get('/api/products/1', (req,res) => {
    const singleProduct = products.find( (product) => product.id === 1 )
    res.json(singleProduct);
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})