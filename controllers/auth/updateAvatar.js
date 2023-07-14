const Users = require("../../models/userModel");
const path = require("path");
const fs = require("fs/promises");
const fse = require('fs-extra')
const jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;

    const { _id } = req.user;
    const filename = originalname;

    const userDir = path.join(avatarsDir, `${_id}`);
    await fse.ensureDir(userDir);

    const resultUpload = path.join(userDir, filename);

    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("avatars", `${_id}`, filename);
    await Users.findByIdAndUpdate(_id, { avatarURL });

    jimp.read(resultUpload, (error, res) => {
        if (error) {
            console.log(error);
        }
        res.resize(250, 250).write(resultUpload);
    });

    res.json({
        avatarURL,
    });
};

module.exports = updateAvatar;