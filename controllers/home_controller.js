const User = require('../models/user');
const temp = require('./temp');

module.exports.home = async function(req, res){
    try{
        return res.render('home');
    }catch(err){
        console.log('*******Error in home controller', err);
        return;
    }
}