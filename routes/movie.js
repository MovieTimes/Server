const router = require('express').Router()
const { getByTitleAndYear, getById } = require('../controllers/omdb-api')
const {auth} = require('../middlewares/auth')

router.post('/title', auth, getByTitleAndYear)
router.post('/id', auth, getById)

module.exports = router