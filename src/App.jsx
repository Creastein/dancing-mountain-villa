import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Rooms from './components/Rooms';
import Reviews from './components/Reviews';
import Location from './components/Location';
import RoomDetail from './components/RoomDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import useScrollAnimation from './hooks/useScrollAnimation';
import './index.css';

function App() {
  useScrollAnimation();

  return (
    <Router>
      <ScrollToTop />
      <BackToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Hero /></div>
              <div id="about"><About /></div>
              <div id="features"><Features /></div>
              <div id="gallery"><Gallery /></div>
              <div id="rooms"><Rooms /></div>
              <div id="reviews"><Reviews /></div>
              <div id="location"><Location /></div>
              <div id="contact"><Contact /></div>
            </>
          } />
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
