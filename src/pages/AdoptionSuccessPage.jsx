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
        <div className="min-h-screen w-full font-sans bg-[#FDEBE2]">
            {/* Header */}
            <header className="bg-[#9D7E6B] h-14 flex items-center px-4 shadow-md z-20 sticky top-0 justify-between">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 bg-[#FAC19E] text-black px-2 py-1 rounded-full font-bold hover:bg-[#e9b392] transition-colors shadow-md text-xs uppercase cursor-pointer"
                >
                    <FaHome /> Inicio
                </button>
                <div className="text-white font-bold text-base uppercase tracking-widest hidden sm:block">ALOA - ¡Entrevista!</div>
                <div className="w-16 hidden sm:block"></div> {/* Spacer */}
            </header>

            {/* Main Content */}
            <main className="relative py-4 px-2">
                {/* Content Container */}
                <div className="flex flex-col items-center justify-start">

                    <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-2xl max-w-5xl w-full text-center border-4 border-[#9D7E6B] animate-in zoom-in duration-500 relative my-2">
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

                        <div className="flex flex-col items-center mb-3">
                            <img src={aloaLogo} alt="ALOA Logo" className="w-20 h-20 object-contain mb-2 drop-shadow-md" />
                            <h1 className="text-2xl md:text-3xl font-extrabold text-[#9D7E6B] uppercase tracking-wide mb-1">
                                ¡Entrevista Programada!
                            </h1>
                            <div className="w-24 h-1 bg-[#FAC19E] rounded-full mb-3"></div>
                        </div>

                        <div className="space-y-3 text-gray-700">
                            <p className="text-base md:text-lg font-medium">
                                Tu solicitud para adoptar a <span className="text-[#d97706] font-bold text-xl block mt-1 transform hover:scale-110 transition-transform duration-300 inline-block">{dogName}</span> ha sido recibida
                            </p>

                            <p className="text-sm leading-relaxed max-w-xl mx-auto">
                                Para garantizar el bienestar de nuestras mascotas, te invitamos a una entrevista personal. Evaluaremos tu idoneidad como adoptante, verificando que puedas brindar un hogar seguro, amoroso y responsable. Nos pondremos en contacto contigo pronto para agendar la cita.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 max-w-4xl mx-auto text-left">
                                <div className="bg-[#FDEBE2] p-3 rounded-xl border border-[#FAC19E] shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-base font-bold text-[#9D7E6B] mb-2 flex items-center gap-2">
                                        <FaHeart className="text-red-400" /> Beneficios de una mascota
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-800">
                                        <li>Reducen el estrés y la ansiedad diaria.</li>
                                        <li>Fomentan la actividad física y los paseos.</li>
                                        <li>Brindan compañía incondicional y lealtad.</li>
                                        <li>Ayudan a mejorar la salud cardiovascular.</li>
                                        <li>Mejoran el desarrollo emocional familiar.</li>
                                    </ul>
                                </div>
                                <div className="bg-[#FDEBE2] p-3 rounded-xl border border-[#FAC19E] shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-base font-bold text-[#9D7E6B] mb-2 flex items-center gap-2">
                                        <FaDog className="text-[#9D7E6B]" /> Cuidados importantes
                                    </h3>
                                    <ul className="list-disc list-inside space-y-1 text-xs text-gray-800">
                                        <li>Visitas periódicas al veterinario y vacunas.</li>
                                        <li>Alimentación balanceada y agua fresca siempre.</li>
                                        <li>Tiempo diario de juego y paseos recreativos.</li>
                                        <li>Cariño, paciencia y refuerzo positivo.</li>
                                        <li>Mantener su higiene y limpieza dental.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-[#FDEBE2]/50 p-2 rounded-lg inline-block mt-3">
                                <p className="text-[#9D7E6B] font-bold italic text-xs">
                                    "Salvar un animal no cambiará el mundo, pero cambiará el mundo para ese animal."
                                </p>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                onClick={() => navigate('/')}
                                className="bg-[#2A3748] text-white font-bold py-2 px-6 rounded-full hover:bg-[#1a202c] transition-all transform hover:scale-105 shadow-xl text-sm flex items-center gap-2 mx-auto"
                            >
                                <FaHome /> Volver al Inicio
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};
