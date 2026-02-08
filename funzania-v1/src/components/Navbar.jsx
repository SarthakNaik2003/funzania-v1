import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* LOGO */}
                <div className="text-3xl font-black tracking-tight flex items-baseline select-none cursor-pointer">
                    <span className="text-[#ec4899]">Fun</span>
                    <span className="text-[#fbbf24]">zania</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {['Courses', 'Age Groups', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
                        <a key={item} href="#" className="text-white text-lg font-bold hover:text-[#fbbf24] transition-colors">
                            {item}
                        </a>
                    ))}
                    <button className="bg-[#fbbf24] hover:bg-[#f59e0b] text-purple-900 px-6 py-2 rounded-full font-black shadow-[0_4px_0_#d97706] active:shadow-none active:translate-y-1 transition-all">
                        Enroll Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white p-4 shadow-xl flex flex-col gap-4 md:hidden">
                    {['Courses', 'Age Groups', 'Pricing', 'Contact'].map((item) => (
                        <a key={item} href="#" className="text-purple-900 font-bold text-lg">{item}</a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;