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
import { useState } from 'react';
import axios from 'axios';

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
  const [userId, setUserId] = useState('');

  const isAuthentication = () => {

    axios
      .get(`${serverURL}/user/${userId}`, {
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

  const handleLogout = () => {
    axios.post(`${serverURL}/signout`).then((res) => {
      setUserInfo(null);
      setIsLogin(false);
    });
  };

  // useEffect(() => {
  //   isAuthentication();
  // }, []);

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
            setIsLogin={setIsLogin}
            isAuthentication={isAuthentication}
            setAccessToken={setAccessToken}
            setUserId={setUserId}
            serverURL={serverURL}
          />}
        </Route>
        <Route exact path='/mypage'>
          <Mypage user={user} userInfo={userInfo} />
        </Route>
        <Route exact path='/test'>
          <Test />
        </Route>
        <Route exact path='/testpage'>
          <TestPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;