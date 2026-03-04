import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Courses', path: '/courses' },
        // { name: 'Age Groups', path: '#' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="absolute top-0 w-full z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* LOGO */}
                {/* Make the logo link to home */}
                <Link to="/" className="text-3xl font-black tracking-tight flex items-baseline select-none cursor-pointer">
                    <span className="text-[#ec4899]">Fun</span>
                    <span className="text-[#fbbf24]">zania</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        // 3. Use Link instead of a tag
                        <Link
                            key={item.name}
                            to={item.path}
                            className="text-white text-lg font-bold hover:text-[#fbbf24] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/919377023088?text=Hi%20Funzania!%20I%20would%20like%20to%20enroll%20my%20child."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#fbbf24] hover:bg-[#f59e0b] text-purple-900 px-6 py-2 rounded-full font-black shadow-[0_4px_0_#d97706] active:shadow-none active:translate-y-1 transition-all"
                    >
                        Enroll Now
                    </a>
                </div>

                {/* ... Mobile menu code remains similar, just update the links ... */}
            </div>
        </nav>
    );
};

export default Navbar;