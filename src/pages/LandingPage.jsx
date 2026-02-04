import React from 'react';
import puppyBg from '../assets/puppy_bg.png';
import aloaLogo from '../assets/aloa_logo_final.png';
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

export const LandingPage = () => {
    return (
        <div className="flex flex-col h-screen w-full font-sans overflow-hidden">
            {/* Header */}
            <header className="bg-[#4a7ebd] h-20 flex items-center px-8 space-x-4 shadow-md z-20">
                <button className="bg-[#4a7ebd] text-black border border-black/40 rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#3b669e] transition-colors">
                    Raza Pequeña
                </button>
                <button className="bg-[#4a7ebd] text-black border border-black/40 rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#3b669e] transition-colors">
                    Raza Mediana
                </button>
                <button className="bg-[#4a7ebd] text-black border border-black/40 rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#3b669e] transition-colors">
                    Raza Grande
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src={puppyBg} alt="Background" className="w-full h-full object-cover" />
                </div>

                {/* Overlay Content Container */}
                <div className="relative z-10 w-full h-full">

                    {/* Right Side Buttons */}
                    <div className="absolute right-0 top-12 flex flex-col space-y-4 pr-6 items-end">
                        <button className="bg-[#4a7ebd] text-black border border-black/40 rounded-full w-40 h-10 flex items-center justify-center text-xs font-bold uppercase hover:bg-[#3b669e] transition-colors shadow-lg">
                            ¿Quiénes Somos?
                        </button>
                        <button className="bg-[#4a7ebd] text-black border border-black/40 rounded-full w-40 h-10 flex items-center justify-center text-xs font-bold uppercase hover:bg-[#3b669e] transition-colors shadow-lg">
                            Misión
                        </button>
                        <button className="bg-[#4a7ebd] text-black border border-black/40 rounded-full w-40 h-10 flex items-center justify-center text-xs font-bold uppercase hover:bg-[#3b669e] transition-colors shadow-lg">
                            Visión
                        </button>
                    </div>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        {/* Filter Button */}
                        <div className="pointer-events-auto mb-6">
                            <button className="bg-[#4a7ebd] text-black border border-black/50 w-64 py-3 text-lg font-medium shadow-xl hover:bg-[#3b669e] transition-colors">
                                FILTRO
                            </button>
                        </div>

                        {/* Logo */}
                        <div className="pointer-events-auto bg-white p-4 shadow-2xl flex flex-col items-center justify-center">
                            <img src={aloaLogo} alt="ALOA Logo" className="w-40 h-32 object-contain" />
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#4a7ebd] h-16 flex items-center justify-between px-10 text-black font-bold shadow-inner z-20">
                <span className="text-sm tracking-widest">CONTACTOS:</span>

                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="bg-white p-1 rounded shadow-sm">
                            <SiGmail className="text-[#ea4335] text-lg" />
                        </div>
                        <span className="text-sm">aloadopcion@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="bg-white p-1 rounded-full shadow-sm">
                            <FaPhoneAlt className="text-black text-sm" />
                        </div>
                        <span className="text-sm">4275-6866</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
