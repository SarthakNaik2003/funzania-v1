import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Testimonials from './pages/Testimonials';
import bgImage from './assets/bg-image.webp';


function App() {
  return (
    <Router>
      <div
        className="min-h-screen w-full bg-center bg-fixed bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: '100% 100%'
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          {/* 2. Add the new route */}
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;