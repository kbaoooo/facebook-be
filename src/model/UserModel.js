import DB from "../config/db";

class UserModel {
  // [GET]
  async getAllUsers() {
    try {
      const connection = await DB.connect();
      const data = await connection.query("SELECT * FROM `users`");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UserModel();
