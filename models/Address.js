const mongoose = require('mongoose');


const AddressSchema = mongoose.Schema({
    address: {
        type: String,
        required: true,
        minLength: 24,
        maxLength: 128
    },
    metadata: String,
    token: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Token',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})


module.exports = mongoose.model('Address', AddressSchema)
