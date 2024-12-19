import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

const App = () => {
  return (
    <Router>
      <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <img src="/assets/taislogosite.png" alt="Tais Logo" className="bottom-right-logo" />
      </div>
    </Router>

  );
};

export default App;
