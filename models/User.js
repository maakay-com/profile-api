const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    account_number: {
        type: String,
        required: true,
        minLength: 64,
        maxLength: 64
    },
    nonce: {
        type: Number,
        default: Math.floor(Math.random() * (999999 - 100000) + 100000)
    }
})


module.exports = mongoose.model('User', UserSchema)
