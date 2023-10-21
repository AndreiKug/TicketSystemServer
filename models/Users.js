const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    tag: String,
    question: String,
    createdAt: Date,
    // _id: mongoose.Schema.Types.ObjectId
});

const UserModel = mongoose.model('forms', UserSchema);

module.exports = UserModel;