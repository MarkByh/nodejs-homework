const express = require("express");

const { login, register, current, logout, updateAvatar, verifyEmail, resendVerifyEmail } = require("../../controllers/auth");
const { validateBody, upload } = require("../../middlewares");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

const { registerSchema, loginSchema, emailSchema } = require("../../schema/AuthSchema");

router.post("/register", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenticate, current);

router.post("/logout", authenticate, logout);

router.patch('/avatars', authenticate, upload.single('avatar'), updateAvatar);

router.post("/verify", validateBody(emailSchema), resendVerifyEmail);

router.get("/verify/:verificationCode", verifyEmail);

module.exports = router;