const Contacts = require("../../models/contactsModel")

const listContacts = async (req, res) => {
    const { _id: owner } = req.user;

    const result = await Contacts.find({ owner }, "-createdAt -updatedAt -__v").populate("owner", "email");

    res.json(result);
};

module.exports = listContacts;