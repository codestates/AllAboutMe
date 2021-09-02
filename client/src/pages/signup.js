import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './signup.css';
import Footer from './footer';

axios.defaults.withCredentials = true;

function SignUp({ serverURL }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });
  const [message, setMessage] = useState('입력해주세요.');
  const history = useHistory();
  const [agree, setAgree] =  useState(false);

  const clickAgree = () => {
    setAgree(!agree);
  }

  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };

  function isEmail(asValue) {
    var regExp =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(asValue);
  }

  function isCelluar(asValue) {
    var regExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
    return regExp.test(asValue);
  }

  function isJobPassword(asValue) {
    var regExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regExp.test(asValue);
  }

  const handleSignup = () => {
    const { email, password, name, phone } = userInfo;

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

    if (!isCelluar(phone)) {
      setMessage('휴대번호(010-####-####)형식을 맞춰주세요.');
      return;
    }

    if (!email || !password || !name || !phone) {
      setMessage('모든 항목은 필수입니다.');
      return;
    } 

    
    if (agree !== true) {
      setMessage('동의합니다 클릭을 해주세요.')
      return ;
    }

    setMessage('Join us 버튼을 눌러주세요')

    axios
      .post(
        `${serverURL}/signup`,
        { email, password, name, phone },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((data) => {
        if (data.status === 200) {
          history.push('/login');
          alert('회원가입이 완료되었습니다.');
        }
      })
      .catch((err) => {
        if (err.response.status === 409) alert('이미 존재하는 이메일입니다.')
      })

  };

  return (
    <div className='signup'>
    <div className='signup-container'>
      <div className='signup-logo'>Sign up</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            className='signup-input'
            placeholder='ID (email)'
            type='email'
            onChange={handleInputValue('email')}
          />
        </div>
        <div>
          <input
            className='signup-input'
            placeholder='Password'
            type='password'
            onChange={handleInputValue('password')}
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
            onChange={handleInputValue('phone')}
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
          <input className='signup-checkbox' type='checkbox' onClick={() => clickAgree()}/>
          <div className='signup-agree'>동의합니다.</div>
        </div>
      </div>
      <button
        className='signup-button'
        type='submit'
        onClick={handleSignup}
      >
        Join us !
      </button>
      <div className='signup_footer'>
      <Footer />
      </div>
    </div>
    </div>
  );
}
export default SignUp;
