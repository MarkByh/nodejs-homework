const catchAsync = require('../../utils/catchAsync')

const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const removeContact = require('./removeContact')
const addContact = require('./addContact')
const updateContact = require("./updateContact")
const updateFavorite = require('./updateFavorite')

module.exports = {
    listContacts: catchAsync(listContacts),
    getContactById: catchAsync(getContactById),
    removeContact: catchAsync(removeContact),
    addContact: catchAsync(addContact),
    updateContact: catchAsync(updateContact),
    updateFavorite: catchAsync(updateFavorite),
}
