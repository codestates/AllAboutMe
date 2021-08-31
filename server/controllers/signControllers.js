const { user } = require('../models');
const { use } = require('../routes/user');
const { generateAccessToken, generateRefreshToken } = require('./jwt');

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
    const refreshToken = generateRefreshToken(userInfo.dataValues);
    
    res.cookie('accessToken', accessToken, {
      maxAge: 1000 * 60 * 60 * 3, // 3h
      httpOnly: true,
      // https 사용하면
      // secure: false,
      // sameSite: none,
    });
    res.cookie('refreshToken', refreshToken, {
      maxAge: 1000 * 60 * 60 * 24, // 1d
      httpOnly: true,
      // https 사용하면
      // secure: false,
      // sameSite: none,
    });

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