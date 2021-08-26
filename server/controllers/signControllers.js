module.exports = {
  login: (req, res) => {
    // const { email, password } = req.body;
    return res.status(200).send('login');
  },
  logout: (req, res) => {
    return res.status(200).send('logout');
  }
}