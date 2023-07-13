const Contacts = require("../../models/contactsModel")

const addContact = async (req, res) => {
    const { _id: owner } = req.user;
    const result = await Contacts.create({ ...req.body, owner });
    res.status(201).json(result);
};

module.exports = addContact;