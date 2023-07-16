const Contacts = require("../../models/contactsModel")
const { HttpError } = require('../../helpers')


const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contacts.findByIdAndUpdate(contactId, req.body, {
        new: true,
    });

    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.json(result);
};


module.exports = updateContact;