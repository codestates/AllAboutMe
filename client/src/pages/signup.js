import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Footer from './footer';
import './signup.css';

axios.defaults.withCredentials = true;

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    username: '',
    phone: '',
  });
  const [message, setMessage] = useState('입력해주세요.');

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  const handleSignup = () => {
    const { email, password, username, phone } = userInfo;
    if (!email || !password || !username || !phone) {
      setMessage('모든 항목은 필수입니다.');
      return;
    }

    axios
      .post(
        'https://localhost:4000/signup',
        { email, password, username, phone },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((data) => {
        if (data.status === 201) useHistory.push('/Login');
      });
  };

  function isEmail(asValue) {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    regExp.test(asValue) === false
      ? setMessage('이메일 형식을 맞춰주세요.')
      : setMessage('OK!');
    //return regExp.test(asValue)
  }

  function isCelluar(asValue) {
    var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    regExp.test(asValue) === false
      ? setMessage('휴대번호(010-####-####)형식을 맞춰주세요.')
      : setMessage('OK!');
    //return regExp.test(asValue)
  }

  function isJobPassword(asValue) {
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
    regExp.test(asValue) === false
      ? setMessage(
          '최소 8자 이상, 영문 대문자, 영문 소문자, 숫자, 특수문자가 각각 최소 1개 이상이여야 합니다.'
        )
      : setMessage('OK!');
    //return regExp.test(asValue)
  }

  return (
    <div className='signup-container'>
      <div className='signup-logo'>Sign up</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            className='signup-input'
            placeholder='ID (email)'
            type='email'
            onChange={(handleInputValue('email'), isEmail)}
          />
        </div>
        <div>
          <input
            className='signup-input'
            placeholder='Password'
            type='password'
            onChange={(handleInputValue('password'), isJobPassword)}
          ></input>
        </div>
        <div>
          <input
            className='signup-input'
            placeholder='Name'
            type='name'
            onChange={handleInputValue('name')}
          ></input>
        </div>
        <div>
          <input
            className='signup-input'
            placeholder='Phone Number'
            type='text'
            name='Phone'
            id='Phone'
            onChange={(handleInputValue('phone'), isCelluar)}
          ></input>
        </div>
      </form>
      <div>
        <div className='signup-notice-message-box'>
          <div>{message}</div>
        </div>
      </div>
      <div>
        <div className='signup-checkbox-agree-container'>
          <input className='signup-checkbox' type='checkbox' />
          <div className='signup-agree'>동의합니다.</div>
        </div>
      </div>
      <button
        className='signup-button'
        type='submit'
        onClick={
          isEmail || isCelluar || isJobPassword ? handleSignup : !handleSignup
        }
      >
        Join us !
      </button>
      <footer className='signup_footer'>
        <Footer />
      </footer>
    </div>
  );
}
export default SignUp;
