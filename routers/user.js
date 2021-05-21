const express = require('express');
const router = express.Router();
const passport = require('passport');

const user_controller = require('../controllers/user_controller');

router.get('/sign-in', user_controller.signIn);
router.get('/sign-up', user_controller.signUp);
router.get('/destroy-session', user_controller.destroySession);

router.post('/create-session', passport.authenticate('local', {failureRedirect: '/users/sign-in'}), user_controller.createSession);
router.post('/create', user_controller.create);

module.exports = router;