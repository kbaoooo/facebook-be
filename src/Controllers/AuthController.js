import AuthModel from "../model/AuthModel";
import UserModel from "../model/UserModel";

class AuthController {
  //[GET] user info
  async login(req, res) {
    const { phone, password } = req.body;
    const data = await AuthModel.login(phone, password);
    const [results, fields] = data;

    if (results) {
      return res.json({
        status: 200,
        message: "OK",
        data: results,
      });
    } else {
      return res.json({
        status: 400,
        message: "User does not exist",
      });
    }
  }

  // [POST] register
  async register(req, res) {
    const [results, fields] = await UserModel.getAllUsers();
    const { username, phone, password } = req.body;
    for (let i = 0; i < results.length; i++) {
      if (results[i].phone === phone) {
        return res.json({
          status: 400,
          message: "User Already Exited",
        });
      }
    }
    const response = await AuthModel.register(username, phone, password);
    return res.json(response);
  }
}

export default new AuthController();
