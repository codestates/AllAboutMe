import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import Footer from './footer';

axios.defaults.withCredentials = true;

function Login({ handleResponseSuccess, setAccessToken, serverURL }) {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('안녕하세요.');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  function isEmail(asValue) {
    var regExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  }

  function isJobPassword(asValue) {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regExp.test(asValue);
  }

  const handleLogin = () => {
    const { email, password } = loginInfo;

    if (!isEmail(email)) {
      setMessage('이메일 형식을 맞춰주세요.');
      return;
    }

    if (!isJobPassword(password)) {
      setMessage(
        '최소 8자, 하나의 문자, 하나의 숫자가 포함되어야합니다.'
      );
      return;
    }

    if (!email || !password) {
      setMessage('이메일과 비밀번호를 입력하세요');
      return;
    }

    setMessage('Login 버튼을 눌러주세요')

    axios
      .post(
        `${serverURL}/login`,
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },       
        },   
      )
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("accessToken", res.data.data.accessToken);
          handleResponseSuccess();
          console.log('login OK');
        }
      })
      .catch((err) => {
        if (err.response.status === 401) alert('비밀번호를 확인해주세요.'); //이 기능이 안됨.
        if (err.response.status === 404) alert('등록되지 않은 회원입니다.');
      });
  };
  
  return (
    <div className='login'>
    <div className='login-container'>
      <div className='login-logo'>Login</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className='login-input'
          placeholder='ID (email)'
          type='email'
          onChange={handleInputValue('email')}
        ></input>
        <div>
          <input
            className='login-input'
            placeholder='Password'
            type='password'
            onChange={handleInputValue('password')}
          ></input>
        </div>
        <div>
          <div className='signup-notice-message-box'>
            <div>{message}</div>
          </div>
        </div>
        <button className='login-button' type='submit' onClick={handleLogin}>
          Login
        </button>
      </form>
    <div className='login_footer'>
      <Footer />
      </div>
    </div>
    </div>
  );
}

export default Login;