const Users = require("../../models/userModel");

const logout = async (req, res) => {
    const { id } = req.user;

    await Users.findByIdAndUpdate(id, { token: "" });

    res.json({
        message: "logout succsess",
    });
};

module.exports = logout;