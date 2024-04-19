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

// app.get('/api/products/1', (req,res) => {
//     const singleProduct = products.find( (product) => product.id === 1 )
//     res.json(singleProduct);
// })

// but what if we have 100s or 1000s of products
// are we going to write code for each
// we should use route parameters instead of hard coding for each product

app.get('/api/products/:shawarma', (req,res) => {
    // console.log(req);

    // console.log(req.params);
    // { shawarma: '1' }

    const {shawarma} = req.params;
    // console.log(shawarma);
    // 1

    const singleProduct = products.find( (product) => product.id === Number(shawarma) )

    if(!singleProduct) {
        return res.status(404).send('product not available');
    }

    // console.log(singleProduct);
    return res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('hello world')
})


// Query String Parameters aka url Parameters
// ---------------------------------------------
// a way for us to send small amounts of info.
// to the server
// using the url

// this info is usually used as parameters to query the database or
// filter results
// this depends on who is setting up the server

app.get('/api/v1/query', (req,res) => {
    // console.log(req.query);
    // { search: 'a', limit: '2' }
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if(search){
      // just like how we use 'i' in for loop
      // productsssff will act like that as a temporary variable
      // to hold each product in the array 'sortedProducts'
      sortedProducts = sortedProducts.filter( (productsssff) => {
        return productsssff.name.startsWith(search);
      })
    }
    if(limit){
      sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).json({ sucess: true, data: [] })
    }

    // res.send('yo')
    res.status(200).json(sortedProducts)
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})
