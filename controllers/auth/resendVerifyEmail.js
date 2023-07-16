const { HttpError, sendEmail } = require("../../helpers");
const Users = require("../../models/userModel");
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    const user = await Users.findOne({ email });

    if (!user) {
        throw HttpError(400, "Missing required field email");
    }

    if (user.verify) {
        throw HttpError(400, "Verification has already been passed");
    }

    const verifyEmail = {
        to: email,
        subject: "Verify token is required",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationCode}">Confirm your email</a>`,
    };
    await sendEmail(verifyEmail);

    res.json({
        message: "Verification email sent",
    });
};

module.exports = resendVerifyEmail;