const express = require('express');
const { signupUser, loginUser } = require("../Controllers/userController");
const authRouter = express.Router();

authRouter.post('/signup', signupUser )
authRouter.post('/login', loginUser )

module.exports = authRouter;