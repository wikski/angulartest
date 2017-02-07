const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const User = module.exports = mongoose.model('userdata', userSchema, 'userdata');

// get users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

// create user
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}