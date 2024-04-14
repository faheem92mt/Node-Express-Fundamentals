const express = require('express');
const router = express.Router();


// router.post('/', (req,res) => {
//     // console.log(req.body);
//     // res.send('post')
  
//     const { name } = req.body
  
//     if (!name) {
//       return res
//         .status(400)
//         .json({ success: false, msg: 'please provide name value' })
//     }
  
//     res.status(201).json({ success: true, person: name })
  
// })

// add data (url encoded)
router.post('/', (req, res) => {
    console.log(req.body);
    const { name } = req.body
    if (name) {
      return res.status(200).send(`Welcome ${name}`)
    }
  
    res.status(401).send('Please Provide Credentials')
})

module.exports = router
