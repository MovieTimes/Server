const router = require('express').Router()
const { getByTitleAndYear, getById } = require('../controllers/omdb-api')

router.post('/title', getByTitleAndYear)
router.post('/id', getById)

module.exports = router