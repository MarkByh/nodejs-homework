const Users = require("../../models/userModel");
const { HttpError, sendEmail } = require('../../helpers');
const bcrypt = require("bcrypt");
const gravatar = require("gravatar")
const { nanoid } = require("nanoid");
const { BASE_URL } = process.env;


const register = async (req, res) => {
    const { email, password } = req.body;
    const verificationCode = nanoid();
    const user = await Users.findOne({ email });
    if (user) {
        throw HttpError(409, "Email in use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const newUser = await Users.create({ ...req.body, password: hashPassword, avatarURL, verificationCode });

    const verifyEmail = {
        to: email,
        subject: "Verify token is required",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationCode}">Confirm your email</a>`,
    };

    await sendEmail(verifyEmail);

    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,

    });
};

module.exports = register;