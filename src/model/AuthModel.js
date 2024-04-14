import DB from "../config/db";

class AuthModel {
  // [GET]
  async login(phone, password) {
    try {
      const connection = await DB.connect();
      const data = await connection.query(
        "SELECT * FROM `users` WHERE `phone` = ? AND `password` = ?",
        [phone, password]
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // [POST]
  async register(username, phone, password) {
    try {
      const connection = await DB.connect();
      const data = await connection.query(
        "INSERT INTO users(username, phone, password) VALUES (?, ?, ?)",
        [username, phone, password]
      );

      if (data) {
        return {
          status: 200,
          message: "OK",
          data
        };
      } else {
        return {
          status: 500,
          message: "FAIL",
        };
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthModel();
