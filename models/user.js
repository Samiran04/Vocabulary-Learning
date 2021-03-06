const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    day: {
        type: Number
    },
    time: {
        type: Number
    },
    list: [
        {
            type: String
        }
    ]
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;