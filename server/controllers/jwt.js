require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '1h' });
  },
  verifyAccessToken: (accessToken) => {
    try {
      return verify(accessToken, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
  }
}