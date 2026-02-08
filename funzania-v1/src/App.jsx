import React from 'react';
import Home from './pages/Home';
import bgImage from './assets/bg-image.png';

function App() {
  return (
    <div
      className="min-h-screen w-full bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: '100% 100%' // Forces the image to stretch to exact screen size
      }}
    >
      <Home />
    </div>
  );
}

export default App;