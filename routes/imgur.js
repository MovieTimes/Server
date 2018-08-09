const imgurRouter = require('express').Router()
const getSearchTitle = require('../controllers/imgur')

router.get('/imgur', getSearchTitle)

module.exports = imgurRouter
