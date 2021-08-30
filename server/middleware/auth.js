require('dotenv').config();
const { verifyAccessToken } = require('../controllers/jwt')

module.exports = {
  isAuthorized: async (req, res, next) => {
    const authorization = req.headers['authorization'];
    if (!authorization) {
      console.log('access token not found');
      res.status(404).send({ message: 'access token not found' });
    } else {
      const accessToken = authorization.split(' ')[1];
      try {
        const decoded = await verifyAccessToken(accessToken);
        // 접근 권한 임시 설정
        // TODO: 사용자별 권한 설정 필요
        req.body.authUserId = decoded.id;
        next();
      } catch (err) {
        res.status(401).send({ message: 'unauthorized token' });
      }
    }
  }
}