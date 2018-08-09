const router = require('express').Router()
const { trailer } = require('../controllers/youtube')
const {auth} = require('../middlewares/auth')

router.post('/trailer', auth, trailer)

module.exports = router