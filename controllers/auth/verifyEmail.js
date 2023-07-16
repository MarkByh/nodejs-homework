const Users = require("../../models/userModel");
const { HttpError } = require("../../helpers");

const verifyEmail = async (req, res) => {
    const { verificationCode } = req.params;
    const user = await Users.findOne({ verificationCode });

    if (!user) {
        throw HttpError(404, "User not found");
    }

    await Users.findByIdAndUpdate(user._id, {
        verify: true,
        verificationCode: "",
    });

    res.json({
        message: "Verification successful",
    });
};

module.exports = verifyEmail;