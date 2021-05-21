const User = require('../models/user');

module.exports.signIn = async function(req, res){
    return res.render('signIn');
}

module.exports.signUp = async function(req, res){
    return res.render('signUp');
}

module.exports.create = async function(req, res){
    try{
        let user = await User.findOne({email: req.body.email});

        if(user || req.body.password != req.body.confirm_password)
        {
            return res.redirect('back');
        }
        else
        {
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                day: 0,
                list: []
            });

            return res.redirect('/users/sign-in');
        }
    }catch(err){
        console.log('*******Error in user create', err);
        return;
    }
}

module.exports.createSession = async function(req, res){
    try{
        return res.redirect('/');
    }catch(err){
        console.log('*********Error in create session', err);
        return;
    }
}