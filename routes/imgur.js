const router = require('express').Router()
const getSearchTitle = require('../controllers/imgur')
const {auth} = require('../middlewares/auth')

router.post('/', auth, getSearchTitle)

module.exports = router
