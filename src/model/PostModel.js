import DB from "../config/db";

class PostModel {
  // [GET]
  async getAllPosts() {
    try {
      const connection = await DB.connect();
      const data = await connection.query("SELECT *, users.username, users.id, users.avatar FROM `posts` INNER JOIN `users` ON posts.users_id = users.id");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PostModel();
