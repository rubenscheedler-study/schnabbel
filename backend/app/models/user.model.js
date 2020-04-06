const mongoose = require('mongoose');
 
const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    active: {
        type: Boolean,
        default: false
    }
});
 
module.exports = mongoose.model('User', UserSchema);
