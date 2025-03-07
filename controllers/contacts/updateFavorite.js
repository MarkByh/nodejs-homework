const Contacts = require("../../models/contactsModel")
const { HttpError } = require('../../helpers')

const updateFavorite = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contacts.findByIdAndUpdate(contactId, req.body, {
        new: true,
    });
    console.log(result);
    if (!result) {
        throw HttpError(404, "Not found");
    }

    res.json(result);
};

module.exports = updateFavorite;