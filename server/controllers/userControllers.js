const { user, favorite } = require('../models');

module.exports = {
  // GET /user/:id
  // 사용자 정보 로드
  userInfo: async (req, res) => {
    const userId = req.params.id;
    const userInfo = await user.findOne({ where: { id: userId } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    } 

    const { id, email, name, phone } = userInfo.dataValues;

    return res.status(200).send({ data: { id, email, name, phone }, message: 'ok'});
  },

  // PUT /user/:id
  // 사용자 정보 수정
  editUser: async (req, res) => {
    const userId = req.params.id;
    const { email, password, name, phone } = req.body;
    const userInfo = await user.findOne({ where: { id: userId } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    }

    const updateInfo = await user.update({ email, password, name, phone }, {
      where: { id: userId }
    });

    return res.status(200).send({ data: { email, password, name, phone } , message: 'success edit user' });
  },

  // GET /user/:id/favorite
  favoriteList: async (req, res) => {
    const userId = req.params.id;
    const userInfo = await user.findOne({ where: { id: userId } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    } 

    const favoriteList = await favorite.findAll({
      attributes: ['id', 'name'],
      where: { userId }
    })
    return res.status(200).send({ data: { favoriteList }, messsage: 'user favorite list' });
  },

  // POST /user/:id/favorite
  addFavorite: async (req, res) => {
    const userId = req.params.id;
    const userInfo = await user.findOne({ where: { id: userId } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    } 

    try {
      const { name, selectId, testId } = req.body;
      const item = await favorite.create({
        userId,
        name,
        selectId,
        testId
      })
      return res.status(200).send('add user favorite');
    } catch (err) {
      console.log(err);
      //return res.status().send('')
    }
  },

  // DELETE /user/:id/favorite
  deleteFavorite: (req, res) => {
    return res.status(200).send('delete user favorite')
  },

  // DELETE /user/:id
  deleteUser: (req, res) => {
    return res.status(200).send('delete user');
  }
}