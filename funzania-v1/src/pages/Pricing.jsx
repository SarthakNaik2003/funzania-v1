import React from 'react';
import { Check, Star } from 'lucide-react';
import Navbar from '../components/Navbar';

// --- PRICING DATA ---
const pricingPlans = [
    {
        id: 1,
        name: "Starter Pack",
        duration: "1 Month Plan",
        price: "₹200",
        period: "/ Month",
        features: [
            "Both age groups included",
            "Level 1 + Level 2",
            "Fun Puzzles & GK",
            "Weekly Quizzes"
        ],
        theme: {
            header: "bg-gradient-to-b from-[#6ee7b7] to-[#22c55e]",
            card: "bg-[#f0fdf4] border-[#86efac]",
            text: "text-green-700",
            button: "bg-gradient-to-b from-[#f97316] to-[#ea580c] shadow-[0_4px_0_#c2410c]"
        }
    },
    {
        id: 2,
        name: "Smart Pack",
        duration: "6 Months Plan",
        price: "₹500",
        period: "/ 6 Months",
        isPopular: true,
        features: [
            "Both age groups included",
            "Level 1 + Level 2",
            "Progress Tracking",
            "Special Worksheets"
        ],
        theme: {
            header: "bg-gradient-to-b from-[#93c5fd] to-[#3b82f6]",
            card: "bg-[#eff6ff] border-[#93c5fd]",
            text: "text-blue-800",
            button: "bg-gradient-to-b from-[#f97316] to-[#ea580c] shadow-[0_4px_0_#c2410c]"
        }
    },
    {
        id: 3,
        name: "Genius Pack",
        duration: "12 Months Plan",
        price: "₹800",
        period: "/ 12 Months",
        hasStars: true,
        features: [
            "Both age groups included",
            "Level 1 + Level 2",
            "Certificates & Rewards",
            "Priority Support"
        ],
        theme: {
            header: "bg-gradient-to-b from-[#d8b4fe] to-[#a855f7]",
            card: "bg-[#faf5ff] border-[#d8b4fe]",
            text: "text-purple-800",
            button: "bg-gradient-to-b from-[#f97316] to-[#ea580c] shadow-[0_4px_0_#c2410c]"
        }
    }
];

// --- BOTTOM LEVEL PILLS ---
const levelPills = [
    { text: "8-11 Level 1", color: "bg-orange-400 text-white" },
    { text: "8-11 Level 2", color: "bg-blue-400 text-white" },
    { text: "12-15 Level 1", color: "bg-green-500 text-white" },
    { text: "12-15 Level 2", color: "bg-purple-500 text-white" }
];

const Pricing = () => {
    return (
        <div className="relative w-full min-h-screen pb-12">

            {/* Dark Overlay (optional, for consistency with other pages) */}
            <div className="absolute inset-0 bg-white/20 pointer-events-none backdrop-blur-sm"></div>

            <div className="relative z-10 font-sans">
                <Navbar />

                <div className="max-w-7xl mx-auto px-6 py-24">

                    {/* Header Section */}
                    <div className="flex flex-col items-center text-center mb-16 relative">
                        <h1 className="text-5xl md:text-6xl font-black mb-4 drop-shadow-md flex gap-2">
                            <span className="text-[#ef4444]">P</span>
                            <span className="text-[#f97316]">r</span>
                            <span className="text-[#f59e0b]">i</span>
                            <span className="text-[#84cc16]">c</span>
                            <span className="text-[#06b6d4]">i</span>
                            <span className="text-[#8b5cf6]">n</span>
                            <span className="text-[#ba3c20]">g</span>
                            <span className="text-[#ef4444] ml-3">P</span>
                            <span className="text-[#f97316]">l</span>
                            <span className="text-[#f59e0b]">a</span>
                            <span className="text-[#84cc16]">n</span>
                            <span className="text-[#06b6d4]">s</span>
                        </h1>
                        <p className="text-2xl text-blue-900 font-bold drop-shadow-sm">
                            Affordable learning for every child
                        </p>
                    </div>

                    {/* Pricing Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mt-8">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative flex flex-col rounded-[2.5rem] border-4 ${plan.theme.card} shadow-2xl transform transition-transform duration-300 hover:-translate-y-2`}
                            >
                                {/* Most Popular Badge */}
                                {plan.isPopular && (
                                    <div className="absolute -top-6 -right-4 z-20">
                                        <div className="relative flex items-center justify-center">
                                            <Star className="w-24 h-24 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                                            <div className="absolute text-center flex flex-col">
                                                <span className="text-white font-black text-sm leading-tight drop-shadow-md">Most</span>
                                                <span className="text-white font-black text-sm leading-tight drop-shadow-md">Popular</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Card Header */}
                                <div className={`w-full ${plan.theme.header} rounded-t-[2.2rem] py-6 text-center border-b-4 border-white/50 shadow-sm relative overflow-hidden`}>
                                    {/* Subtle shine effect on header */}
                                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 rounded-t-[2.2rem]"></div>

                                    <h2 className="text-3xl font-black text-white drop-shadow-md flex items-center justify-center gap-2 relative z-10">
                                        {plan.hasStars && <Star size={24} className="text-yellow-300 fill-yellow-300" />}
                                        {plan.name}
                                        {plan.hasStars && <Star size={24} className="text-yellow-300 fill-yellow-300" />}
                                    </h2>
                                </div>

                                {/* Card Body */}
                                <div className="p-8 flex-grow flex flex-col items-center bg-white/50 rounded-b-[2.2rem]">
                                    <p className={`text-xl font-bold mb-4 ${plan.theme.text}`}>{plan.duration}</p>

                                    <div className="flex items-baseline mb-6 border-b-2 border-dashed border-gray-300 pb-6 w-full justify-center">
                                        <span className={`text-5xl font-black ${plan.theme.text}`}>{plan.price}</span>
                                        <span className="text-gray-600 font-bold ml-1">{plan.period}</span>
                                    </div>

                                    <ul className="w-full space-y-4 mb-10 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-lg font-bold text-gray-700">
                                                <div className="bg-green-500 rounded-full p-1 shadow-sm">
                                                    <Check size={16} className="text-white stroke-[4]" />
                                                </div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Enroll Button */}
                                    <a
                                        href={`https://wa.me/919377023088?text=${encodeURIComponent(`Hi Funzania! I am interested in enrolling in the ${plan.name} (${plan.duration}) for ${plan.price}. Please share the details.`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-11/12 py-4 rounded-full text-white text-center font-black text-xl tracking-wider transition-all active:translate-y-1 active:shadow-none hover:brightness-110 ${plan.theme.button}`}
                                    >
                                        Enroll Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Pricing;