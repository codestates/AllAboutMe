require('dotenv').config();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();
const port = process.env.HTTP_PORT;

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

app.listen(port, () => {
  console.log('Hello World!');
})
