import React from 'react';
import { Gamepad2 } from 'lucide-react';
import Navbar from '../components/Navbar';
// Reuse the same background image for consistency
import bgImage from '../assets/bg-image.webp';
import explorerImg from '../assets/explorerImg.webp';
import detectiveImg from '../assets/detectiveImg.webp';
import challengerImg from '../assets/challengerImg.webp';
import mastermindImg from '../assets/mastermindImg.webp';



// --- COURSE DATA ---
const coursesData = [
    {
        id: 1,
        level: 'Level 1',
        title: 'Explorer',
        ageRange: 'Ages 8-11',
        image: explorerImg,
        // Gradient from reference image
        bgColor: 'bg-gradient-to-b from-[#4facfe] to-[#00f2fe]',
        rating: 3,
        buttonColor: 'bg-blue-500',
    },
    {
        id: 2,
        level: 'Level 2',
        title: 'Detective',
        ageRange: 'Ages 8-11',
        image: detectiveImg,
        bgColor: 'bg-gradient-to-b from-[#ff9a44] to-[#fc6076]',
        rating: 3,
        buttonColor: 'bg-orange-500',
    },
    {
        id: 3,
        level: 'Level 3',
        title: 'Challenger',
        ageRange: 'Ages 12-15',
        image: challengerImg,
        bgColor: 'bg-gradient-to-b from-[#43e97b] to-[#38f9d7]',
        rating: 3,
        buttonColor: 'bg-green-500',
    },
    {
        id: 4,
        level: 'Level 2',
        title: 'Mastermind',
        ageRange: 'Ages 12-15',
        image: mastermindImg,
        bgColor: 'bg-gradient-to-b from-[#a18cd1] to-[#fbc2eb]',
        rating: 3,
        buttonColor: 'bg-purple-500',
    },
];

// --- STAR RATING COMPONENT ---
const StarRating = ({ rating }) => (
    <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
            <span key={i} className={`text-2xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
        ))}
    </div>
);

const Courses = () => {
    return (
        <div className="relative w-full min-h-screen">

            {/* Dark Overlay (optional, keep if you want the courses page darker) */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

            <div className="relative z-10 font-sans">
                <Navbar />

                <div className="max-w-7xl mx-auto px-6 py-24">
                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center mb-12 relative">
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                            Our <span className="text-[#ec4899]">Courses</span>
                        </h1>
                        <p className="text-2xl text-purple-100 font-bold mb-8 drop-shadow-md">
                            Choose the best level for your child!
                        </p>

                        {/* View All Button */}
                        <div className="absolute top-0 right-0 hidden md:block">
                            <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-purple-900 text-lg px-8 py-3 rounded-full font-black shadow-[0_4px_0_#d97706] active:shadow-none active:translate-y-1 transition-all border-2 border-[#fde047]">
                                View All Courses
                            </button>
                        </div>
                    </div>

                    {/* Game Controller Icon */}
                    {/* <div className="flex justify-center mb-12">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full shadow-lg transform -rotate-12">
                            <Gamepad2 size={64} className="text-white drop-shadow-md" />
                        </div>
                    </div> */}

                    {/* Courses Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                        {coursesData.map((course) => (
                            <div
                                key={course.id}
                                className={`group relative rounded-[2.5rem] p-1 shadow-xl transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl ${course.bgColor}`}
                            >
                                {/* Inner White Border/Glow Effect */}
                                <div className="absolute inset-0 rounded-[2.5rem] border-[3px] border-white/30 pointer-events-none z-20"></div>

                                {/* Main Card Content */}
                                <div className="relative h-full bg-white/10 backdrop-blur-sm rounded-[2.3rem] flex flex-col items-center p-6 text-white overflow-visible">

                                    {/* Floating Top Badge */}
                                    <div className="absolute -top-4 bg-white text-purple-900 text-sm font-black px-6 py-2 rounded-full shadow-lg transform rotate-[-2deg] group-hover:rotate-2 transition-transform">
                                        {course.ageRange}
                                    </div>

                                    {/* Level & Title */}
                                    <div className="mt-8 text-center">
                                        <h2 className="text-xl font-bold uppercase tracking-wider text-white/90 drop-shadow-sm">
                                            {course.level}
                                        </h2>
                                        <h3 className="text-3xl font-black mt-1 drop-shadow-md tracking-tight">
                                            {course.title}
                                        </h3>
                                    </div>

                                    {/* Character Image (With Pop-out Effect) */}
                                    <div className="relative w-full flex justify-center mt-4 mb-2 group-hover:scale-110 transition-transform duration-300 ease-out">
                                        {/* Subtle Glow behind image */}
                                        <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full transform scale-75"></div>
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-44 h-44 object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] z-10"
                                        />
                                    </div>

                                    {/* Bottom Stats & Button */}
                                    <div className="mt-auto w-full flex flex-col items-center gap-3">
                                        {/* Star Rating Container */}
                                        <div className="bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-md">
                                            <StarRating rating={course.rating} />
                                        </div>

                                        {/* Call to Action Button */}
                                        <button className="w-full bg-white text-purple-900 font-black py-3 rounded-xl shadow-[0_4px_0_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_rgba(0,0,0,0.1)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2 group-hover:bg-[#fbbf24]">
                                            Start Adventure
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={3}
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;