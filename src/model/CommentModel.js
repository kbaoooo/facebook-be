import DB from "../config/db";

class FriendModel {
  // [GET]
  async getAllCommentsByPostId(post_id) {
    try {
      const connection = await DB.connect();
      const data = await connection.query(
        "SELECT comments.id, comments.content, comments.created_at, users.username, users.avatar FROM `comments` INNER JOIN `users` ON comments.users_id = users.id WHERE comments.posts_id = ?"
      , [post_id]);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FriendModel();
