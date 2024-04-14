const express = require('express')
const friendRouter = express.Router();
import FriendController from '../Controllers/FriendController';

friendRouter.get('/:id', FriendController.getAllFriendsByUserId)

export default friendRouter