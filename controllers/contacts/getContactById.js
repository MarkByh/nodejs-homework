const Contacts = require("../../models/contactsModel")

const { HttpError } = require("../../helpers");

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    console.log(req.params);
    const result = await Contacts.findById(contactId);
    if (!result) {
        throw HttpError(404, "Not found");
    }
    res.json(result);
};

module.exports = getContactById;