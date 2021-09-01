const { user, favorite } = require('../models');

module.exports = {
  // GET /user/info
  // 사용자 정보 로드
  userInfo: async (req, res) => {
    const userId = req.body.authUserId;
    const userInfo = await user.findOne({ where: { id: userId } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    } 

    const { id, email, name, phone } = userInfo.dataValues;

    return res.status(200).send({ data: { id, email, name, phone }, message: 'ok'});
  },

  // PUT /user/info
  // 사용자 정보 수정
  editUser: async (req, res) => {
    const userId = req.body.authUserId;
    const userInfo = await user.findOne({ where: { id: userId } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    }

    const updateInfo = await user.update({ 
      password: req.body.password, name: req.body.name, phone: req.body.phone 
    }, {
      where: { id: userId }
    });

    const result = await user.findOne({ where: { id: userId } });
    const { email, name, phone } = result.dataValues;

    return res.status(200).send({ data: { email, name, phone } , message: 'success edit user' });
  },

  // GET /user/favorite
  favoriteList: async (req, res) => {
    const userId = req.body.authUserId;
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

  // POST /user/favorite
  addFavorite: async (req, res) => {
    const userId = req.body.authUserId;
    const userInfo = await user.findOne({ where: { id: userId } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    } 

    try {
      const { name, id, testId } = req.body;
      await favorite.create({
        userId,
        name,
        selectId: id,
        testId
      })
      return res.status(200).send('add user favorite');
    } catch (err) {
      return res.status().send('fail to add favorite')
    }
  },

  // DELETE /user/favorite
  deleteFavorite: async (req, res) => {
    const userId = req.body.authUserId;
    const userInfo = await user.findOne({ where: { id: userId } });
    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    }

    await favorite.destroy({
      where: { id: req.body.id }
    })

    return res.status(200).send('delete user favorite');
  },

  // DELETE /user/info
  deleteUser: async (req, res) => {
    const userId = req.body.authUserId;
    const userInfo = await user.findOne({ where: { id: userId } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    }

    await user.destroy({
      where: { id: userId }
    })
    return res.status(200).send('delete user');
  }
}