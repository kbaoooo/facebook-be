const express = require('express')
const commentRouter = express.Router();
import CommentController from '../Controllers/CommentController';

commentRouter.get('/:id', CommentController.getAllCommentsByPostId)

export default commentRouter