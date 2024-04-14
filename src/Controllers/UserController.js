import UserModel from "../model/UserModel";

class UserController {
  //[GET] all users
  async users(req, res) {
    const { email, phone, password } = req.body;
    const data = await UserModel.login(email, phone, password);
    const [results, fields] = data;
    return res.json(results);
  }
}

export default new UserController();
