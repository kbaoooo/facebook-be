const express = require("express");
const postRouter = express.Router();
import PostController from "../Controllers/PostController";
import CommentController from "../Controllers/CommentController";

postRouter.get("/", PostController.getAllPosts);
postRouter.get("/:id/comments", CommentController.getAllCommentsByPostId);

export default postRouter;
