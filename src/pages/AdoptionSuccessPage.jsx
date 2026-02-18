import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaHeart, FaHome, FaDog, FaTimes } from 'react-icons/fa';
import aloaLogo from '../assets/aloa_logo_final.png';
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import confetti from 'canvas-confetti';

export const AdoptionSuccessPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const dogName = searchParams.get('dogName') || 'tu nuevo amigo';

    useEffect(() => {
        // Trigger confetti on mount
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const random = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-screen w-full font-sans overflow-hidden">
            {/* Header */}
            <header className="bg-[#9D7E6B] h-20 flex items-center px-10 shadow-md z-20 sticky top-0 justify-between">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 bg-[#FAC19E] text-black px-4 py-2 rounded-full font-bold hover:bg-[#e9b392] transition-colors shadow-md text-sm uppercase cursor-pointer"
                >
                    <FaHome /> Inicio
                </button>
                <div className="text-white font-bold text-xl uppercase tracking-widest hidden sm:block">ALOA - ¡Adopción Exitosa!</div>
                <div className="w-24 hidden sm:block"></div> {/* Spacer */}
            </header>

            {/* Main Content */}
            <main className="flex-1 relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 theme-bg"></div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">

                    <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-3xl w-full text-center border-4 border-[#9D7E6B] animate-in zoom-in duration-500 relative">
                        {/* Close Button */}
                        <button
                            onClick={() => navigate('/')}
                            className="absolute top-6 right-8 text-gray-400 hover:text-[#9D7E6B] transition-colors z-50"
                            aria-label="Cerrar"
                        >
                            <FaTimes size={28} />
                        </button>

                        {/* Decorative floating icons */}
                        <FaHeart className="text-red-400 text-4xl absolute top-10 left-10 animate-bounce delay-100 hidden sm:block" />
                        <FaHeart className="text-red-400 text-3xl absolute bottom-10 right-10 animate-bounce delay-300 hidden sm:block" />
                        <FaDog className="text-[#9D7E6B] text-5xl absolute top-6 right-12 animate-pulse delay-700 hidden sm:block" />

                        <div className="flex flex-col items-center mb-6">
                            <img src={aloaLogo} alt="ALOA Logo" className="w-32 h-32 object-contain mb-4 drop-shadow-md" />
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#9D7E6B] uppercase tracking-wide mb-2">
                                ¡Muchas Gracias!
                            </h1>
                            <div className="w-32 h-2 bg-[#FAC19E] rounded-full mb-6"></div>
                        </div>

                        <div className="space-y-6 text-gray-700">
                            <p className="text-xl md:text-2xl font-medium">
                                Gracias por decidir adoptar a <span className="text-[#d97706] font-bold text-3xl block mt-2 transform hover:scale-110 transition-transform duration-300 inline-block">{dogName}</span>
                            </p>

                            <p className="text-lg leading-relaxed max-w-xl mx-auto">
                                Has dado el primer paso para cambiar una vida para siempre. Hemos recibido tu solicitud y nos pondremos en contacto contigo muy pronto para continuar con el proceso.
                            </p>

                            <div className="bg-[#FDEBE2] p-6 rounded-2xl border-2 border-[#FAC19E] inline-block mt-4 transform hover:-rotate-1 transition-transform duration-300">
                                <p className="text-[#9D7E6B] font-bold italic">
                                    "Salvar un animal no cambiará el mundo, pero cambiará el mundo para ese animal."
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button
                                onClick={() => navigate('/')}
                                className="bg-[#2A3748] text-white font-bold py-4 px-10 rounded-full hover:bg-[#1a202c] transition-all transform hover:scale-105 shadow-xl text-lg flex items-center gap-3 mx-auto"
                            >
                                <FaHome /> Volver al Inicio
                            </button>
                        </div>
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#9D7E6B] h-16 flex items-center justify-between px-10 text-white font-bold shadow-inner z-20">
                <span className="text-sm tracking-widest hidden sm:block">ALOA - Amor por las Mascotas</span>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="bg-white p-1 rounded shadow-sm">
                            <SiGmail className="text-[#ea4335] text-sm" />
                        </div>
                        <span className="text-xs sm:text-sm">aloadopcion@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="bg-white p-1 rounded-full shadow-sm">
                            <FaPhoneAlt className="text-black text-xs" />
                        </div>
                        <span className="text-xs sm:text-sm">4275-6866</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};
