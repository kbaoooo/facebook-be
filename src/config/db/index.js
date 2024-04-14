import mysql from "mysql2/promise";

class DB {
  async connect() {
    try {
      // create the connection to database
      const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "facebook",
      });
      console.log("Connect success");
      return connection;
    } catch (err) {
      console.log("Connect fail: " + err);
    }
  }
}

export default new DB();
