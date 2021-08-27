const { user } = require('../models')

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
  },
  signup: async (req, res) => {
    if (req.body.email && req.body.password && req.body.name && req.body.phone) {
      // user email check
      const userEmail = await user.findOne({
        where: {email : req.body.email}
      });
      if (userEmail) {
        return res.status(409).send("Conflict")
      } else {
        // signUp
        const signUp = await user.create({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone
        })
        return res.status(200).send("ok");
      }
    } else {
      return res.status(422).sned("Unprocessable Ent")
    }
  }
}