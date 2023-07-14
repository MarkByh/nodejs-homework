const express = require("express");

const { login, register, current, logout, updateAvatar } = require("../../controllers/auth");
const { validateBody, upload } = require("../../middlewares");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

const { registerSchema, loginSchema } = require("../../schema/AuthSchema");

router.post("/register", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenticate, current);

router.post("/logout", authenticate, logout);

router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar)

module.exports = router;