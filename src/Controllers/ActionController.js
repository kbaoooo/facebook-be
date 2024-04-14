import ActionModel from "../model/ActionModel";

class ActionController {
  //[POST] 
  async likePost(req, res) {
    const id = req.params.id;
    const data = await ActionModel.likePost(id);
    const [results, fields] = data;

    if(results) {
      return res.json({
        status: 200,
        message: 'OK',
      })
    } else {
      return res.json({
        status: 400,
        message: "FAIL"
      })
    }
  }
}

export default new ActionController();
