import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Popular from './components/Popular';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
