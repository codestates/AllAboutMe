import './App.css';
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