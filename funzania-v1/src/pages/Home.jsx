import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <div className="relative w-full">
            {/* Optional: Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

            <div className="relative z-10">
                <Navbar />
                <Hero />
            </div>
        </div>
    );
};

export default Home;