import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './pages/signup';
import Nav from './pages/nav.js';
import Home from './pages/home';
import Login from './pages/login';
import Mypage from './pages/mypage';
import Test from './pages/test';
import TestPage from './pages/testpage';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
  //!dummydata:사진 떄문에 안 지웠음.
  const user = {
    id: 1,
    img: '/proimg.jpeg',
    email: 'happynewyear@gmail.com',
    name: '전새복',
    phone: '010-0000-0000',
  };
  const serverURL = `http://ec2-54-180-148-229.ap-northeast-2.compute.amazonaws.com`;
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [categorys, setCategorys] = useState([]);
  const [isTestid, setIstestid] = useState(0);
  const [selectList, setSelectList] = useState([]);
  const [newUserInfo, setNewUserInfo] = useState('');

  //!favorite
  const [favorite, setFavorite] = useState([]);

  //!로그인 시, 회원정보 업데이트
  const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken');
    axios
      .get(`${serverURL}/user/info`, {
        headers: { Authorization: `bearer ${accessToken}` },
      })
      .then((res) => {
        const { name, email, phone } = res.data.data;
        setUserInfo({
          name: name,
          email: email,
          phone: phone,
        });
        setIsLogin(true);
      })
      .catch((err) => console.log(err));
  };

  const getFavorite = () => {
    const accessToken = localStorage.getItem('accessToken');
    axios
      .get(`${serverURL}/user/favorite`, {
        headers: { Authorization: `bearer ${accessToken}` },
      })
      .then((res) => {
        setFavorite(res.data.data.favoriteList);
      })
      .catch((err) => console.log(err));
  }
  console.log(favorite)

  const handleResponseSuccess = () => {
    isAuthenticated();
  };

  //!로그아웃 함수
  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem('accessToken');
    setUserInfo(null);
  };

  useEffect(() => {
    isAuthenticated();
    getFavorite();
  }, []);

  // * ==========[test.js]==========
  // 테스트 리스트 전부 가져오기
  const handleCatagory = (data) => {
    setCategorys(data);
  };
  // 선택한 test id 가져오기
  const testId = (id) => {
    setIstestid(id);
  };

  const selects = (list) => {
    setSelectList(list);
    
  }
  
  // * ==========[end]==========

  return (
    <BrowserRouter>
      <Nav isLogin={isLogin} handleLogout={handleLogout} />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/signup'>
          <SignUp serverURL={serverURL} />
        </Route>
        <Route exact path='/login'>
          {isLogin ? (
            <Redirect to='/mypage' />
          ) : (
            <Login
              handleResponseSuccess={handleResponseSuccess}
              serverURL={serverURL}
            />
          )}
        </Route>
        <Route exact path='/mypage'>
          {!isLogin ? (
            <Redirect to='/' />
          ) : (<Mypage
            user={user}
            userInfo={userInfo}
            favorite={favorite}
            setFavorite={setFavorite}
            newUserInfo={newUserInfo}
            setNewUserInfo={setNewUserInfo}
            serverURL={serverURL}
            handleLogout={handleLogout}
            setUserInfo={setUserInfo}
            getFavorite={getFavorite}
          />)}
        </Route>
        <Route exact path='/test'>
          <Test
            handleCatagory={handleCatagory}
            categorys={categorys}
            selects={selects}
            testId={testId}
            serverURL={serverURL}
            setIstestid={setIstestid}
          />
        </Route>
        {isTestid === 0 ? null : (
          <Route exact path={`/test/${isTestid}`}>
            <TestPage 
              selectList={selectList} 
              serverURL={serverURL} 
              isTestid={isTestid} 
              setFavorite={setFavorite} 
              favorite={favorite}
              isLogin={isLogin}
            />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
