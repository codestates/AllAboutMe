const { user } = require('../models')
const { generateAccessToken } = require('../middleware/jwt')

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    const userInfo = await user.findOne({ where: { email } });

    if (!userInfo) {
      return res.status(404).send({ message: "undefined user" });
    } 

    if (userInfo.dataValues.password !== password) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    delete userInfo.dataValues.password;
    const accessToken = generateAccessToken(userInfo.dataValues);

    return res.status(200).send({ data: { accessToken }, message: 'ok'});
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