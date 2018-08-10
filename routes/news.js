const router = require('express').Router()
const { getAllMovieReviews } = require('../controllers/nytimes')
const {auth} = require('../middlewares/auth')

router.post('/', auth, getAllMovieReviews)

module.exports = router