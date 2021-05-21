const fetch = require('node-fetch');

module.exports.findWord = function(req, res){

    fetch('https://api.dictionaryapi.dev/api/v2/entries/'+req.body.lang+'/'+req.body.word)
    .then((result) => {
        return result.json();
    }).then((actulaData) => {
        console.log(actulaData);
        return res.redirect('back');
    }).catch((err) => {
        if(err)
        {
            console.log(err);
            return res.json(500, {
                message: 'Invalid server error'
            });
        }
    });
}

module.exports.searchPage = async function(req, res){
    return res.render('search-page');
}