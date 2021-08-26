import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import SignUp from './pages/signup'
import Nav from './pages/nav.js';
import Footer from './pages/footer'
import Home from './pages/home'
import Login from './pages/login';
import Mypage from './pages/mypage';
import Test from './pages/test';

function App() {
  const user = {
    "id" : 1,
    "img" : "/happynewyear.jpg",
    "email" : "happynewyear@gmail.com",
    "name" : "전새복",
    "phone" : "010-0000-0000"
  }

  return (
    <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/mypage'>
            <Mypage user={user}/>
          </Route>
          <Route path='/test'>
            <Test />
          </Route>
        </Switch>

        <footer>
          <Footer />
        </footer>
    </BrowserRouter>
  );
}

export default App;