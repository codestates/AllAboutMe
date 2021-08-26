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

  // GET /user/favorite/:id
  favoriteList: (req, res) => {
    return res.status(200).send('user favorite list');
  },

  // DELETE /user/favorite/:id
  deleteFavorite: (req, res) => {
    return res.status(200).send('delete user favorite')
  },

  // DELETE /user/:id
  deleteUser: (req, res) => {
    return res.status(200).send('delete user');
  }
}