const Users = require("../../models/userModel");
const { HttpError } = require('../../helpers');
const bcrypt = require("bcrypt");



const register = async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (user) {
        throw HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await Users.create({ ...req.body, password: hashPassword });

    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,
    });
};

module.exports = register;