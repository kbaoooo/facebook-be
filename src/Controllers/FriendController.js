import FriendModel from "../model/FriendModel";

class FriendController {
  //[GET] user info
  async getAllFriendsByUserId(req, res) {
    const id = req.params.id;
    const data = await FriendModel.getAllFriendsByUserId(id);
    const [results, fields] = data;

    if(results) {
      return res.json({
        status: 200,
        message: 'OK',
        data: results
      })
    } else {
      return res.json({
        status: 400,
        message: "FAIL"
      })
    }
  }
}

export default new FriendController();
