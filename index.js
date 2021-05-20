const express = require('express');
const app = express();
const port = 8000;

app.use(express.urlencoded());
app.use(express.static('./assets'));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', require('./routers'));

app.listen(port, function(err){
    if(err)
    {
        console.log('Error during running server', err);
        return;
    }
});