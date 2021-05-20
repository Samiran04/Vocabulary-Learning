const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('./config/passport_local_strategy');

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
    name:'Codeial2',
    secret:'Sonething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
    }
));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.checkAuthtenticatedUser);

app.use('/', require('./routers'));

app.listen(port, function(err){
    if(err)
    {
        console.log('Error during running server', err);
        return;
    }
});