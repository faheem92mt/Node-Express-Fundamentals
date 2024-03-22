const express = require('express');
const app = express();

// importing an object which consists of multiple things from 'data.js'
// module.exports = { products, people }
const {products} = require('./data');

app.listen(5000, (req,res) => {
    console.log('server is listening on port 5000');
})