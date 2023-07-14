const catchAsync = require('../../utils/catchAsync')

const register = require('./register');
const login = require('./login')
const current = require('./current')
const logout = require("./logout");
const updateAvatar = require('./updateAvatar')

module.exports = {
    register: catchAsync(register),
    login: catchAsync(login),
    current: catchAsync(current),
    logout: catchAsync(logout),
    updateAvatar: catchAsync(updateAvatar),
}


