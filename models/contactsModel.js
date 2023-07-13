const mongoose = require("mongoose");
const ErrorHandle = require('../middlewares/ErrorHandle')

const contactScema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Set name for contact'],
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        favorite: {
            type: Boolean,
            default: false,
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
    },
    { timestamps: true }
);
contactScema.post("save", ErrorHandle);
const Contacts = mongoose.model('contacts', contactScema)

module.exports = Contacts;