import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// ... imports

// ... ScrollToTop

function App() {
  // ... useEffect for observer

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Features />
              <Gallery />
              <Rooms />
              <Location />
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
