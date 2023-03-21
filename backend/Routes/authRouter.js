const express = require('express');
const {signupRoute, loginRoute} = require('../Controllers/authController');
const authRouter = express.Router();

authRouter.post('/signup', signupRoute )
authRouter.post('/login', loginRoute )


module.exports = authRouter;