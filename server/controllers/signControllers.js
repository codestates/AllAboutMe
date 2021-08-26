module.exports = {
  login: (req, res) => {
    // const { email, password } = req.body;
    return res.status(200).send('login');
  },
  loginGithub: () => {
    return res.status(200).send('github login');
  },
  loginGoogle: () => {
    return res.status(200).send('google login');
  },
  logout: (req, res) => {
    return res.status(200).send('logout');
  }
}