require('dotenv').config();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();
const port = 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  })
);
app.use(cookieParser());

// TODO: 미들웨어 jwt verify 함수 만들기

// 라우터 연결



// test
app.get('/', (req, res) => {
  res.status(200).send('Welcome to All About Me Page!');
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
