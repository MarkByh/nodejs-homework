const mongoose = require("mongoose");
const ErrorHandle = require('../middlewares/ErrorHandle')
const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userScema = mongoose.Schema({
    password: {
        type: String,
        required: [true, 'Set password for user'],
    },
    email: {
        type: String,
        match: emailRegexp,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: ""
    },
    avatarURL: {
        type: String,
        required: true,
    },
}, { versionKey: false, timestamps: true })

userScema.post("save", ErrorHandle);
const Users = mongoose.model('users', userScema)

module.exports = Users;