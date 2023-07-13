const express = require("express");

const { login, register, current, logout } = require("../../controllers/auth");
const { validateBody } = require("../../middlewares");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

const { registerSchema, loginSchema } = require("../../schema/AuthSchema");

router.post("/register", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenticate, current);

router.post("/logout", authenticate, logout);

module.exports = router;