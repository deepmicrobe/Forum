const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// create user Schema & model
const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Name field is required']
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
