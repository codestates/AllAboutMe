import './App.css';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import SignUp from './pages/signup';
import Nav from './pages/nav.js';
import Home from './pages/home';
import Login from './pages/login';
import Mypage from './pages/mypage';
import Test from './pages/test';
import TestPage from './pages/testpage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const user = {
    id: 1,
    img: '/happynewyear.jpg',
    email: 'happynewyear@gmail.com',
    name: '전새복',
    phone: '010-0000-0000',
  };

  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const history = useHistory();

  const isAuthentication = () => {
    axios
      .get('http://localhost:4000/auth')
      .then((res) => {
        const { email, name, moblie } = res.date.date.userInfo;
        setUserInfo({
          name: name,
          email: email,
          moblie: moblie,
        });
        setIsLogin(true);
        history.push('/mypage');
      })
      .catch((err) => console.log(err));
  };

  const handleResponseSuccess = () => {
    isAuthentication();
  };

  const handleLogout = () => {
    axios.post('http://localhost:4000/signout').then((res) => {
      setUserInfo(null);
      setIsLogin(false);
      history.push('/');
    });
  }
    useEffect(() => {
      isAuthentication();
    }, []);

    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/mypage">
            <Mypage user={user} />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/testpage">
            <TestPage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };


export default App;
