import './App.css';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Nav from './pages/nav.js';
import Footer from './pages/footer.js'
import Home from './pages/home.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;