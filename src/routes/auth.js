const express = require('express')
const authRouter = express.Router();
import AuthController from '../Controllers/AuthController';

authRouter.post('/login', AuthController.login)
authRouter.post('/register', AuthController.register)

export default authRouter