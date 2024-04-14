import CommentModel from "../model/CommentModel";

class CommentController {
  //[GET] user info
  async getAllCommentsByPostId(req, res) {
    const id = req.params.id;
    const data = await CommentModel.getAllCommentsByPostId(id);
    const [results, fields] = data;
    return res.json(results);
  }
}

export default new CommentController();
