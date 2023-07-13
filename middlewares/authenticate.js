const jwt = require("jsonwebtoken");
const Users = require("../models/userModel");
const { HttpError } = require("../helpers");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
        next(HttpError(401));
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY);


        const user = await Users.findById(id);


        if (!user || !user.token || user.token !== token) {
            next(HttpError(401, "Not authorized"));
        }

        req.user = user;

        next();

    } catch {
        next(HttpError(401, "Not authorized 2 "));
    }

};

module.exports = authenticate;