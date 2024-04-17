const express = require('express');
const router = express.Router();

// 2 dots for 2 levels up
let {people} = require('../data')

// display data in json
router.get('/', (req,res) => {
    res.status(200).json({success:true, data:people})
})

// add data (json)
router.post('/', (req,res) => {
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({success:false, msg: 'pls provide name value'})
    }

    res.status(201).json({ success: true, person: name })
})

// postman
router.post('/postman', (req,res) => {
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({success:false, msg: 'pls provide name value'})
    }

    res.status(201).send({success: true, data: [...people, name]});
})

router.put('/:id', (req,res) => {

})

module.exports = router