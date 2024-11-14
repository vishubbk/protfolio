import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Contact from './components/Contacts/contact'; // Make sure to capitalize 'Contact'
import Popular from './components/Popular';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Changed from Content to Contact */}
      </Routes>
    </Router>
  );
}

export default App;
