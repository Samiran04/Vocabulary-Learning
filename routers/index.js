const express = require('express');
const router = express.Router();
const passport = require('passport');

const home_controller = require('../controllers/home_controller');

router.get('/', passport.checkAuthentication, home_controller.home);
router.use('/users', require('./user'));
router.use('/word', require('./word'));

module.exports = router;