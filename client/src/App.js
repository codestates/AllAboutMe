import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
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
  const user = {
    id: 1,
    img: '/happynewyear.jpg',
    email: 'happynewyear@gmail.com',
    name: '전새복',
    phone: '010-0000-0000',
  };
  const serverURL = `http://ec2-54-180-148-229.ap-northeast-2.compute.amazonaws.com`;
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [categorys, setCategorys] =useState([]);

  //!초기값 DB에서 받아오기, test의 결과가 push될 수 있게 하려면 app.js에 있어야함.
  const initial = ['coding', 'rice'];
  const [favorite, setFavorite] = useState(initial);

  const isAuthenticated = () => {
    axios
      .get(`${serverURL}/user/info`, {
        headers: { Authorization: `bearer ${accessToken}` },
      })
      .then((res) => {
        console.log('제발 : ', res.data.data)
        const {name, email, phone} = res.data.data
        setUserInfo({
          name: name,
          email: email,
          phone: phone,
        })
        setIsLogin(true)
      })
      .catch((err) => console.log(err));
  };

  console.log('userInfo : ', userInfo);

  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  
  const handleLogout = () => {
    // axios.post(`${serverURL}/logout`).then(() => {
      setUserInfo(null);
      setIsLogin(false);
    // });
  };

  useEffect(()=> {
    isAuthenticated();
  },[])
  
  const handleCatagory = (data) => {
    setCategorys(data)
  }

  
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
          {isLogin 
            ? <Redirect to='/mypage' /> 
            : <Login
            handleResponseSuccess={handleResponseSuccess}
            setAccessToken={setAccessToken}
            serverURL={serverURL}
          />}
        </Route>
        <Route exact path='/mypage'>
          <Mypage user={user} userInfo={userInfo} favorite={favorite} setFavorite={setFavorite}/>
        </Route>
        <Route exact path='/test'>
          <Test handleCatagory={handleCatagory} categorys={categorys}/>
        </Route>
        <Route exact path='/testpage'>
          <TestPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;