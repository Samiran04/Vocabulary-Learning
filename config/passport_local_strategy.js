const User = require('../models/user');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const forTime = require('./get_time');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, function(email, password, done){
    User.findOne({email: email}, function(err, user){
        if(err)
        {
            console.log('Error in passport', err);
            return done(err);
        }
        if(!user || user.password != password)
        {
            return done(null, false);
        }
        else
        {
            let curr_time = forTime.time();

            let user_time = user.time;
            let hour = 24;
            let day = (curr_time - user_time) / hour;
            let user_day = user.day;

            if(user_day + 1 < day)
            {
                user.time = curr_time;
            }
            if(user_day < day){
                user.day++;
            }

            user.save();

            return done(null, user);
        }
    });
}));

passport.serializeUser(function(user, done){
    return done(null, user);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err)
        {
            console.log('Error in passport', err);
            return done(err);
        }

        return done(false, id);
    });
});

passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/users/sign-in');
}

passport.checkAuthtenticatedUser = function(req,res,next){
    if(req.isAuthenticated())
    {
        res.locals.user = req.user;
    }
    return next();
}

module.exports = passport;