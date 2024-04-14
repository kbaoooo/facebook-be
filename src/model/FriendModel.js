import DB from "../config/db";

class FriendModel {
  // [GET]
  async getAllFriendsByUserId(id) {
    try {
      const connection = await DB.connect();
      const data = await connection.query(
        "SELECT users.id, users.username, users.avatar FROM users INNER JOIN friends ON users.id = friends.users1_id OR users.id = friends.users2_id WHERE users.id != ? AND (friends.users1_id = ? OR friends.users2_id = ?)"
      , [id, id, id]);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FriendModel();
