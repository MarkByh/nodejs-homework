const Contacts = require("../../models/contactsModel");

const { HttpError } = require("../../helpers");

const removeContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contacts.findByIdAndRemove(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json({
        message: "Delete success",
    });
};

module.exports = removeContact;