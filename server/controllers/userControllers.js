module.exports = {
  // GET /user/:id
  userInfo: (req, res) => {
    // const { email, password } = req.body;
    return res.status(200).send('userInfo');
  },

  // PUT /user/:id
  editUser: (req, res) => {
    return res.status(200).send('edit userInfo');
  },

  // GET /user/:id/favorite
  favoriteList: (req, res) => {
    return res.status(200).send('user favorite list');
  },

  // POST /user/:id/favorite
  addFavorite: (req, res) => {
    return res.status(200).send('add user favorite');
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