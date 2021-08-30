require('dotenv').config();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();
const port = process.env.HTTP_PORT || 80;

// router
const routes = require('./routes');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: 'include',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  })
);
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