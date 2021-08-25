import './App.css';
import SignUp from './pages/signup.js'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Nav from './pages/nav.js';
import Footer from './pages/footer.js'
import Home from './pages/home.js'
import Login from './pages/login';

function App() {
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
        </Switch>

        <footer>
          <Footer />
        </footer>
    </BrowserRouter>
  );
}

export default App;