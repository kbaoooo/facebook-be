const express = require('express')
const userRouter = express.Router();
import UserController from '../Controllers/UserController';

userRouter.get('/', UserController.users)

export default userRouter