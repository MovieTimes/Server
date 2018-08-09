const router = require('express').Router()
const { getByTitleAndYear, getById } = require('../controllers/omdb-api')

router.get('/title', getByTitleAndYear)
router.get('/id', getById)

module.exports = router