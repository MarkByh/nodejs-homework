const catchAsync = require('../../utils/catchAsync')

const register = require('./register');
const login = require('./login')
const current = require('./current')
const logout = require("./logout");
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const resendVerifyEmail = require('./resendVerifyEmail')

module.exports = {
    register: catchAsync(register),
    login: catchAsync(login),
    current: catchAsync(current),
    logout: catchAsync(logout),
    updateAvatar: catchAsync(updateAvatar),
    verifyEmail: catchAsync(verifyEmail),
    resendVerifyEmail: catchAsync(resendVerifyEmail),
}


