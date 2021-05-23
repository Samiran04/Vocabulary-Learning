const mongoose = require('mongoose');

const wordsSchema = new mongoose.Schema({
    list: [
        {
            type: String
        }
    ]
});

let Words = mongoose.model('Words', wordsSchema);

module.exports = Words;