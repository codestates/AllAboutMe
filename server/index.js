require('dotenv').config();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session')

const app = express();
const port = process.env.HTTP_PORT || 80;

// router
const routes = require('./routes');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  })
);

app.use(session({
  httpOnly: true,
  secure: false, // https 환경에서만 session 정보를 주고받도록 처리
  secret: '', // 암호화하는 데 쓰일 키
  resave: false, // 세션을 언제나 저장할지 설정함
  saveUninitialized: true, // 세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장
  cookie: { // 세션 쿠키 설정 (클라이언트에 보내는 쿠키 설정)
    httpOnly: true,
    secure: false
  },

}))


app.use(cookieParser());

// TODO: 미들웨어 jwt verify 함수 만들기

// 라우터 연결
app.use('/', routes);

// test
app.get('/', (req, res) => {
  res.status(200).send('Welcome to All About Me!');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})