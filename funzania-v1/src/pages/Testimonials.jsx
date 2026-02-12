import React from 'react';
import { Quote } from 'lucide-react';
import Navbar from '../components/Navbar';

// --- REUSE YOUR CHARACTER IMAGES ---
// Make sure these paths are correct for your project
import explorerImg from '../assets/explorerImg.webp';
import challengerImg from '../assets/challengerImg.webp';
// For the third image, I'll use the Mastermind one as a placeholder.
// Replace this with the actual image from your design when you have it.
import mastermindImg from '../assets/mastermindImg.webp';


// --- TESTIMONIAL DATA ---
const testimonialsData = [
    {
        id: 1,
        quote: "Funzania is such a fun way for my son to boost his IQ and critical thinking!",
        highlightedWords: ["boost his IQ", "critical thinking"],
        parentName: "Priya Singh",
        rating: 5,
        childImage: explorerImg,
        ageRange: "Ages 8-11",
        // Blue band color
        bandColor: "bg-[#2563eb]",
    },
    {
        id: 2,
        quote: "My daughter is more confident & quick in her decisions now. We love it!",
        highlightedWords: ["confident & quick"],
        parentName: "Rohan Malhotra",
        rating: 5,
        childImage: challengerImg,
        ageRange: "Ages 8-11",
        // Green band color
        bandColor: "bg-[#22c55e]",
    },
    {
        id: 3,
        quote: "Perfect for Olympiads. Skills improved a lot while having fun!",
        highlightedWords: ["Skills improved a lot"],
        parentName: "Meera Sharma",
        rating: 5,
        childImage: mastermindImg,
        ageRange: "Ages 12-15",
        // Red/Orange band color
        bandColor: "bg-[#f97316]",
    },
];

// --- STAR RATING COMPONENT ---
const StarRating = ({ rating, count = 5, color = "text-yellow-400" }) => (
    <div className="flex gap-1">
        {[...Array(count)].map((_, i) => (
            <span key={i} className={`text-2xl ${i < rating ? color : 'text-gray-300'}`}>★</span>
        ))}
    </div>
);

// --- HELPER TO RENDER HIGHLIGHTED QUOTES ---
const renderWithHighlights = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;

    // Create a regular expression to find all highlights
    const regex = new RegExp(`(${highlights.join('|')})`, 'gi');

    // Split text and map to wrap highlights in a span
    return text.split(regex).map((part, index) =>
        highlights.some(h => h.toLowerCase() === part.toLowerCase()) ? (
            <span key={index} className="text-blue-700 font-bold">
                {part}
            </span>
        ) : (
            part
        )
    );
};


const Testimonials = () => {
    return (
        // Note: The main background is handled in App.jsx, so this is transparent
        <div className="relative w-full min-h-screen">

            {/* Dark Overlay (optional, for consistency with Courses page) */}
            <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

            <div className="relative z-10 font-sans">
                <Navbar />

                <div className="max-w-7xl mx-auto px-6 py-24">
                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
                            <span className="text-[#ec4899]">Testi</span>
                            <span className="text-[#fbbf24]">monials</span>
                        </h1>
                        <p className="text-2xl text-purple-100 font-bold drop-shadow-md">
                            Loved by kids & trusted by parents!
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 px-4">
                        {testimonialsData.map((item) => (
                            // TESTIMONIAL CARD
                            <div
                                key={item.id}
                                className="relative bg-white rounded-[2.5rem] shadow-2xl flex flex-col"
                            >
                                {/* Large Quote Icon */}
                                <Quote
                                    size={48}
                                    className="absolute top-6 left-6 text-blue-900/20 rotate-180 fill-current"
                                />

                                {/* Main Content Body */}
                                {/* Added padding-bottom (pb-32) to make space for image & band */}
                                <div className="p-8 pt-16 pb-32 relative z-10">
                                    {/* Quote Text with Highlights */}
                                    <p className="text-blue-900 text-xl font-medium leading-relaxed mb-8">
                                        “{renderWithHighlights(item.quote, item.highlightedWords)}”
                                    </p>

                                    {/* Parent Name & Rating */}
                                    <div>
                                        <h3 className="text-2xl font-black text-blue-900 mb-2">
                                            {item.parentName}
                                        </h3>
                                        <StarRating rating={item.rating} />
                                    </div>
                                </div>

                                {/* FLOATING CHILD IMAGE (Overlaps bottom right) */}
                                <div className="absolute bottom-12 right-4 z-30 w-32 h-32 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                                    <img
                                        src={item.childImage}
                                        alt="Happy Child"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>

                                {/* BOTTOM COLORED BAND */}
                                <div className={`absolute bottom-0 w-full ${item.bandColor} rounded-b-[2.5rem] h-20 flex items-center justify-between px-8 z-20`}>
                                    {/* Extra Stars on the left */}
                                    <StarRating rating={4} count={4} color="text-white/80" />

                                    {/* Age Range Text */}
                                    <span className="text-white font-black text-xl tracking-wider mr-16">
                                        {item.ageRange}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;