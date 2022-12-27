export {}

const router = require('express').Router()
const { checkAuthentication } = require('../middleware/authentication')
const { randomPeople, like } = require('../controllers/matchController')

router.route('/').get(checkAuthentication, randomPeople)
router.route('/like').post(checkAuthentication, like)

module.exports = router
