const handleError = require("./ErrorHandle");
const IsValidId = require("./idCheck");
const validateBody = require("./validBody");
const upload = require('./upload')

module.exports = {
    handleError,
    validateBody,
    IsValidId,
    upload,
};