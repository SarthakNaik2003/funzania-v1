import React, { useState } from 'react';
import { MapPin, Mail, Send, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

const Contact = () => {
    // Update this with your actual WhatsApp number (Country code + Number, no '+')
    const whatsappNumber = "919377023088";

    // 1. Create State for the form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // 2. Handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 3. Handle Form Submission to WhatsApp
    const handleSubmitToWhatsApp = (e) => {
        e.preventDefault(); // Prevent page reload

        // Check if fields are empty
        if (!formData.name || !formData.message) {
            alert("Please fill in your Name and Message before sending.");
            return;
        }

        // Format the message for WhatsApp
        const rawMessage = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email || 'Not provided'}\n*Message:* ${formData.message}`;

        // Encode it for the URL
        const encodedMessage = encodeURIComponent(rawMessage);

        // Create the final WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

        // Optional: Clear the form after sending
        // setFormData({ name: '', email: '', message: '' });
    };

    const whatsappMessage = encodeURIComponent("Hi Funzania! I have a question about your courses.");

    return (
        <div className="relative w-full min-h-screen pb-12">
            <div className="absolute inset-0 bg-white/20 pointer-events-none backdrop-blur-sm"></div>

            <div className="relative z-10 font-sans">
                <Navbar />

                <div className="max-w-7xl mx-auto px-6 py-24">
                    <div className="flex flex-col items-center text-center mb-16">
                        <h1 className="text-5xl md:text-6xl font-black mb-4 drop-shadow-md">
                            <span className="text-[#ec4899]">Contact</span>
                            <span className="text-[#fbbf24] ml-3">Us</span>
                        </h1>
                        <p className="text-2xl text-blue-900 font-bold drop-shadow-sm">
                            We'd love to hear from you!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        {/* LEFT SIDE - Contact Info Cards */}
                        <div className="flex flex-col gap-6">
                            <a
                                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border-4 border-white/50 flex items-center gap-6 transform transition-all hover:-translate-y-2 hover:bg-green-50 group cursor-pointer"
                            >
                                <div className="bg-green-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform">
                                    <MessageCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-blue-900">Chat with Us</h3>
                                    <p className="text-gray-600 font-bold text-lg">+91 93770 23088</p>
                                </div>
                            </a>

                            <a
                                href="mailto:funzania2022@gmail.com"
                                className="bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border-4 border-white/50 flex items-center gap-6 transform transition-all hover:-translate-y-2 hover:bg-blue-50 group cursor-pointer"
                            >
                                <div className="bg-blue-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-blue-900">Email Us</h3>
                                    <p className="text-gray-600 font-bold text-lg">funzania2022@gmail.com</p>
                                </div>
                            </a>

                            <div className="bg-white/80 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border-4 border-white/50 flex items-center gap-6 transform transition-all hover:-translate-y-2 hover:bg-purple-50 group">
                                <div className="bg-purple-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform">
                                    <MapPin className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-blue-900">Visit Us</h3>
                                    <p className="text-gray-600 font-bold text-lg">Vapi, Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE - Updated Message Form */}
                        <div className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] shadow-xl border-4 border-white/50 h-full">
                            <h3 className="text-3xl font-black text-blue-900 mb-6 drop-shadow-sm">Send a Message</h3>

                            <form className="flex flex-col gap-5" onSubmit={handleSubmitToWhatsApp}>
                                <div>
                                    <input
                                        type="text"
                                        name="name" // Added name attribute
                                        value={formData.name} // Connected to state
                                        onChange={handleChange} // Added onChange handler
                                        placeholder="Your Name *"
                                        required // Makes the field mandatory
                                        className="w-full px-6 py-4 rounded-xl bg-white/50 border-2 border-blue-100 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/20 font-bold text-gray-700 placeholder-gray-400 transition-all"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email (Optional)"
                                        className="w-full px-6 py-4 rounded-xl bg-white/50 border-2 border-blue-100 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/20 font-bold text-gray-700 placeholder-gray-400 transition-all"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you? *"
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-white/50 border-2 border-blue-100 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/20 font-bold text-gray-700 placeholder-gray-400 transition-all resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-2 w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-black text-xl py-4 rounded-xl shadow-[0_4px_0_#be123c] active:shadow-none active:translate-y-[4px] transition-all flex items-center justify-center gap-2"
                                >
                                    <Send className="w-6 h-6" />
                                    Send to WhatsApp
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;