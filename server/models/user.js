const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('user', userSchema, 'users');