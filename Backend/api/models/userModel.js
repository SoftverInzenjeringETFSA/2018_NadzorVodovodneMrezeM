var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// username
// password
// todo: guest users

var UserSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('User', UserSchema);