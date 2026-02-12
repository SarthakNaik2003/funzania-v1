import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Rocket, Puzzle } from 'lucide-react';
import kidsImage from '../assets/kids.webp';

const Hero = () => {
    return (
        <div className="relative w-full">
            {/* Floating Background Icons */}
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-20 left-10 text-pink-500 opacity-80"><Brain size={64} /></motion.div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-40 left-20 text-yellow-400 opacity-80"><Rocket size={48} /></motion.div>
            <motion.div animate={{ y: [0, -25, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 0.5 }} className="absolute top-40 right-20 text-green-400 opacity-80"><Puzzle size={56} /></motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} className="absolute bottom-60 right-10 text-blue-400 opacity-80"><Globe size={50} /></motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT COLUMN: Text */}
                <div className="space-y-8 text-center lg:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl lg:text-7xl font-black text-white leading-[1.1] drop-shadow-lg"
                    >
                        Make Your Child <br />
                        <span className="text-[#fbbf24]">Smarter Through</span> <br />
                        Fun Challenges!
                    </motion.h1>

                    <p className="text-xl lg:text-2xl text-purple-100 font-bold tracking-wide">
                        Logical Reasoning • GK • Brain Games <br />
                        <span className="opacity-90 font-normal">Competitive Prep!</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                        <button className="bg-[#22c55e] hover:bg-[#16a34a] text-white text-xl px-8 py-4 rounded-full font-black shadow-[0_6px_0_#15803d] active:shadow-none active:translate-y-1 transition-all border-2 border-[#86efac]">
                            Book Free Demo Class
                        </button>
                        <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-purple-900 text-xl px-10 py-4 rounded-full font-black shadow-[0_6px_0_#d97706] active:shadow-none active:translate-y-1 transition-all border-2 border-[#fde047]">
                            Enroll Now
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN: Image Area */}
                <div className="relative flex justify-center">
                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-500/30 blur-[60px] rounded-full -z-10"></div>

                    <img
                        src={kidsImage}
                        alt="Happy Kids Learning"
                        className="w-full max-w-lg lg:max-w-xl drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;