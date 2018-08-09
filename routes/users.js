const express = require('express');
const router = express.Router();
const {loginFB, login, register} = require ('../controllers/user.js')
// const {register} = require ('../controllers/user.js')

router.post('/loginfb', loginFB)
router.post('/login', login)
router.post('/register', register)


module.exports = router;