var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, unique: true, required: true, lowercase: true, trim: true }, //TODO validation
    password: { type: String, select: false, required: true }
});

module.exports = mongoose.model('User', userSchema);