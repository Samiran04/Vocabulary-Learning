const express = require('express');
const router = express.Router();
const passport = require('passport');

const word_controller = require('../controllers/word_controller');

router.post('/search', passport.checkAuthentication, word_controller.findWord);
router.get('/search-page', passport.checkAuthentication, word_controller.searchPage);

module.exports = router;