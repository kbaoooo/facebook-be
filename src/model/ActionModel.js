import DB from "../config/db";

class FriendModel {
  // [POST]
  async likePost(id) {
    try {
      const connection = await DB.connect();
      const data = await connection.query(
        "INSERT INTO posts(likes) VALUES(?) WHERE id = ?"
      , [id]);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FriendModel();
