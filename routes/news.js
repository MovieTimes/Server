const router = require('express').Router()
const { getAllMovieReviews } = require('../controllers/nytimes')

router.get('/', getAllMovieReviews)

module.exports = router