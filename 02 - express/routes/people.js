// for /api/people

const express = require('express')
// instead of setting up app, we go with router 
// and we get it from express
const router = express.Router()


const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
} = require ('../controllers/people')


// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route(':/id').put(updatePerson).delete(deletePerson)

module.exports = router
  