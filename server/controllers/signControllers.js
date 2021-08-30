const { user } = require('../models');
const { generateAccessToken } = require('./jwt');

module.exports = {
  // 로그인
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

    return res.status(200).send({ data: { accessToken, id: userInfo.dataValues.id }, message: 'ok'});
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
  // 회원가입
  signup: async (req, res) => {
    if (req.body.email && req.body.password && req.body.name && req.body.phone) {
      // user email check
      const userEmail = await user.findOne({
        where: {email : req.body.email}
      });
      if (userEmail) {
        return res.status(409).send("Email Conflict")
      }

      // signUp
      const userInfo = await user.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone
      })
      return res.status(200).send("sign up complete");
      
    } else {
      return res.status(422).sned("Unprocessable Ent")
    }
  }
}