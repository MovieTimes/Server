const router = require('express').Router()
const getSearchTitle = require('../controllers/imgur')

router.post('/', getSearchTitle)

module.exports = router
