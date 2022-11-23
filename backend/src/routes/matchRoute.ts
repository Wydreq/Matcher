export {}

const router = require('express').Router()
const { checkAuthentication } = require('../middleware/authentication')
const { randomPeople } = require('../controllers/matchController')

router.route('/').post(checkAuthentication, randomPeople)

module.exports = router
