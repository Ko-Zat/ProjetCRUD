const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    userName: String,
    password: String,
    mailAddress: String,
    birthday: String,
})

const userModel = mongoose.model("User", userSchema);