const express = require('express');
const router = express.Router();

// 2 dots for 2 levels up
let {people} = require('../data')

// display data in json
router.get('/api/people', (req,res) => {
    res.status(200).json({success:true, data:people})
})

// add data (json)
router.post('/api/people', (req,res) => {
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({success:false, msg: 'pls provide name value'})
    }

    res.status(201).json({ success: true, person: name })
})

// postman
router.post('/api/people/postman', (req,res) => {
    const {name} = req.body;

    if (!name) {
        return res.status(400).json({success:false, msg: 'pls provide name value'})
    }

    res.status(201).send({success: true, data: [...people, name]});
})

router.put('/api/people/:id', (req,res) => {

})

module.exports = router