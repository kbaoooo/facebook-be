import PostModel from "../model/PostModel";

class PostController {
  //[GET] all posts
  async getAllPosts(req, res) {
    const data = await PostModel.getAllPosts();
    if(data) {
        const [results, fields] = data;
        return res.json({
            status: 200,
            message: 'OK',
            data: results
        });
    } else {
        return res.json({
            status: 500,
            message: 'FAIL',
            data: []
        })
    }
  }
}

export default new PostController();
