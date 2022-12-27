export {}

const router = require('express').Router()
const { checkAuthentication } = require('../middleware/authentication')
const {
  randomPeople,
  like,
  getAllMatches,
} = require('../controllers/matchController')

router.route('/').get(checkAuthentication, randomPeople)
router.route('/all').get(checkAuthentication, getAllMatches)
router.route('/like').post(checkAuthentication, like)

module.exports = router
