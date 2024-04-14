const express = require('express')
const actionRouter = express.Router();
import ActionController from '../Controllers/ActionController';

actionRouter.post('/like/:id', ActionController.likePost)

export default actionRouter