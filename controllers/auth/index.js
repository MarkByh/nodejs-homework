const catchAsync = require('../../utils/catchAsync')

const register = require('./register');
const login = require('./login')
const current = require('./current')
const logout = require("./logout");

module.exports = {
    register: catchAsync(register),
    login: catchAsync(login),
    current: catchAsync(current),
    logout: catchAsync(logout)

}


