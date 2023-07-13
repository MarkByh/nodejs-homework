const express = require('express')
const { listContacts, addContact, getContactById, removeContact, updateContact, updateFavorite } = require('../../controllers/contacts')
const IsValidId = require('../../middlewares/idCheck')
const validBody = require('../../middlewares/validBody')
const authenticate = require('../../middlewares/authenticate')
const { schema, updateSchema, updateFavoriteSchema } = require('../../schema/Schema')

const router = express.Router();

router.get("/", authenticate, listContacts);

router.post("/", authenticate, validBody(schema), addContact);

router.get("/:contactId", authenticate, IsValidId, getContactById);

router.delete("/:contactId", authenticate, IsValidId, removeContact);

router.put("/:contactId", IsValidId, authenticate, validBody(updateSchema), updateContact);

router.patch("/:contactId/favorite", authenticate, IsValidId, validBody(updateFavoriteSchema), updateFavorite);


module.exports = router
