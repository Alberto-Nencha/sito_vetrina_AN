import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Progetti from './pages/Progetti';
import Contatti from './pages/Contatti';
import './Navbar.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/progetti" className="nav-link">Progetti</Link>
        <Link to="/contatti" className="nav-link">Contatti</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progetti" element={<Progetti />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </div>
  );
}

export default App;