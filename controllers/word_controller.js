const fetch = require('node-fetch');
const Words = require('../models/words');
const User = require('../models/user');

module.exports.findWord = function(req, res){

    fetch('https://api.dictionaryapi.dev/api/v2/entries/'+req.body.lang+'/'+req.body.word)
    .then((result) => {
        return result.json();
    }).then((actulaData) => {
        //console.log(actulaData[0]);
        return res.render('search-page', {
            word: actulaData[0]
        });
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

module.exports.translate = function(req, res){

    fetch("https://microsoft-translator-text.p.rapidapi.com/BreakSentence?api-version=3.0", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-rapidapi-key": "1306a4a87emsh96d2efc90adfa46p14ade9jsn76af57496012",
            "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com"
        },
        "body": [
            {
                "Text": "How are you? I am fine. What did you do today?"
            }
        ]
    })
    .then(response => {
        //console.log(response);
        return response.json();
    })
    .then(result => {
        console.log(result);
        return res.redirect('back');
    })
    .catch(err => {
        console.error(err);
    });
}

module.exports.getWords = async function(req, res){
    try{

        let temp = await Words.find({});

        let words = temp[0].list;

        let user = await User.findById(req.user._id);

        let len = await Math.min(user.day+4, words.length);

        let myWords = await words.slice(user.day, len);

        console.log(myWords);

        return res.redirect('back');
    }catch(err){
        console.log('Error in get words', err);
        return;
    }
}