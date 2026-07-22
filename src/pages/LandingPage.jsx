import React, { useState, useEffect } from 'react';
import themeBg from '../assets/theme_bg.jpg';
import aloaLogo from '../assets/aloa_logo_final.png';
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
    const navigate = useNavigate();
    const [showQuienesSomos, setShowQuienesSomos] = useState(false);
    const [showMision, setShowMision] = useState(false);
    const [showVision, setShowVision] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        try {
            const userData = localStorage.getItem('user');
            if (userData) {
                setUserDetails(JSON.parse(userData));
            }
            
            // Mostrar bienvenida solo la primera vez
            const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
            if (hasSeenWelcome) {
                setShowWelcome(false);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleCloseWelcome = () => {
        setShowWelcome(false);
        localStorage.setItem('hasSeenWelcome', 'true');
    };

    return (
        <div className="flex flex-col h-screen w-full font-sans overflow-hidden">
            {/* Header */}
            <header className="bg-[#9D7E6B] h-20 flex items-center justify-between px-8 shadow-md z-20">
                <div className="flex items-center space-x-4">
                    <button
                        onClick={() => navigate('/raza-pequena')}
                        className="bg-[#FAC19E] text-black border border-black/20 rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#e9b392] transition-colors"
                    >
                        Raza Pequeña
                    </button>
                    <button
                        onClick={() => navigate('/raza-mediana')}
                        className="bg-[#FAC19E] text-black border border-black/20 rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#e9b392] transition-colors"
                    >
                        Raza Mediana
                    </button>
                    <button
                        onClick={() => navigate('/raza-grande')}
                        className="bg-[#FAC19E] text-black border border-black/20 rounded-full px-6 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-[#e9b392] transition-colors"
                    >
                        Raza Grande
                    </button>
                </div>
                <button
                    onClick={() => setShowProfile(true)}
                    className="bg-white/20 text-white border border-white/40 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white/30 transition-colors flex items-center gap-2"
                >
                    {userDetails.username || 'Mi Cuenta'}
                </button>
            </header>

            {/* Main Content */}
            <main className="flex-1 relative">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 theme-bg">
                    {/* Background is handled by theme-bg class in CSS */}
                </div>

                {/* Overlay Content Container */}
                <div className="relative z-10 w-full h-full">

                    {/* Right Side Buttons */}
                    <div className="absolute right-0 top-12 flex flex-col space-y-4 pr-6 items-end">
                        <button
                            onClick={() => setShowQuienesSomos(true)}
                            className="bg-[#FAC19E] text-black border border-black/20 rounded-full w-40 h-10 flex items-center justify-center text-xs font-bold uppercase hover:bg-[#e9b392] transition-colors shadow-lg"
                        >
                            ¿Quiénes Somos?
                        </button>
                        <button
                            onClick={() => setShowMision(true)}
                            className="bg-[#FAC19E] text-black border border-black/20 rounded-full w-40 h-10 flex items-center justify-center text-xs font-bold uppercase hover:bg-[#e9b392] transition-colors shadow-lg"
                        >
                            Misión
                        </button>
                        <button
                            onClick={() => setShowVision(true)}
                            className="bg-[#FAC19E] text-black border border-black/20 rounded-full w-40 h-10 flex items-center justify-center text-xs font-bold uppercase hover:bg-[#e9b392] transition-colors shadow-lg"
                        >
                            Visión
                        </button>
                    </div>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        {/* Logo */}
                        <div className="pointer-events-auto bg-[#FDEBE2] p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center">
                            <img src={aloaLogo} alt="ALOA Logo" className="w-40 h-32 object-contain" />
                        </div>
                    </div>

                </div>

                {/* Modal - Quiénes Somos */}
                {showQuienesSomos && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full relative border-4 border-[#9D7E6B] animate-in fade-in zoom-in duration-300">
                            <button
                                onClick={() => setShowQuienesSomos(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-3xl font-extrabold text-[#9D7E6B] mb-6 text-center uppercase tracking-wide border-b-2 border-[#9D7E6B]/20 pb-4">
                                ¿Quiénes Somos?
                            </h2>

                            <div className="space-y-4 text-gray-700 text-justify leading-relaxed text-lg">
                                <p>
                                    <span className="font-bold text-[#9D7E6B]">ALOA</span> es una comunidad creada por estudiantes y pensada para todas las personas que aman a los perros.
                                </p>
                                <p>
                                    Si estás buscando adoptar a tu nuevo compañero de vida o ya tienes un perro en casa, en <span className="font-bold text-[#9D7E6B]">ALOA</span> encontrarás información útil para que tú y tu familia puedan brindarle una vida feliz y saludable.
                                </p>
                                <p>
                                    Nuestra plataforma cuenta con un catálogo actualizado de perros disponibles para adopción. Cada uno tiene una ficha informativa con detalles importantes que te ayudarán a encontrar al amigo ideal según tu estilo de vida y familia.
                                </p>
                                <p>
                                    En <span className="font-bold text-[#9D7E6B]">ALOA</span> creemos que el cuidado de las mascotas es fundamental, por eso también compartimos información sobre atención veterinaria, calendarios de vacunación y recomendaciones básicas para el bienestar de tu perro.
                                </p>
                            </div>

                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={() => setShowQuienesSomos(false)}
                                    className="bg-[#9D7E6B] text-white px-8 py-2 rounded-full font-bold hover:bg-[#8c705f] transition-colors shadow-md"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal - Misión */}
                {showMision && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full relative border-4 border-[#9D7E6B] animate-in fade-in zoom-in duration-300">
                            <button
                                onClick={() => setShowMision(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-3xl font-extrabold text-[#9D7E6B] mb-6 text-center uppercase tracking-wide border-b-2 border-[#9D7E6B]/20 pb-4">
                                Nuestra Misión
                            </h2>

                            <div className="space-y-4 text-gray-700 text-justify leading-relaxed text-lg italic">
                                <p>
                                    "Promover la adopción responsable de perros mediante una plataforma accesible e informativa, conectando a las personas con mascotas que necesitan un hogar, y brindando orientación básica sobre su cuidado, salud y bienestar, fomentando el respeto y amor por los animales."
                                </p>
                            </div>

                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={() => setShowMision(false)}
                                    className="bg-[#9D7E6B] text-white px-8 py-2 rounded-full font-bold hover:bg-[#8c705f] transition-colors shadow-md"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal - Visión */}
                {showVision && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-3xl w-full relative border-4 border-[#9D7E6B] animate-in fade-in zoom-in duration-300">
                            <button
                                onClick={() => setShowVision(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-3xl font-extrabold text-[#9D7E6B] mb-6 text-center uppercase tracking-wide border-b-2 border-[#9D7E6B]/20 pb-4">
                                Nuestra Visión
                            </h2>

                            <div className="space-y-4 text-gray-700 text-justify leading-relaxed text-lg italic">
                                <p>
                                    "Ser una plataforma estudiantil reconocida por generar conciencia sobre la adopción de perros, contribuyendo a la reducción del abandono animal y formando una comunidad comprometida con el cuidado responsable y la protección de las mascotas."
                                </p>
                            </div>

                            <div className="mt-8 flex justify-center">
                                <button
                                    onClick={() => setShowVision(false)}
                                    className="bg-[#9D7E6B] text-white px-8 py-2 rounded-full font-bold hover:bg-[#8c705f] transition-colors shadow-md"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal - Perfil */}
                {showProfile && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative border-4 border-[#9D7E6B] animate-in fade-in zoom-in duration-300">
                            <button
                                onClick={() => setShowProfile(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <h2 className="text-2xl font-extrabold text-[#9D7E6B] mb-6 text-center uppercase tracking-wide border-b-2 border-[#9D7E6B]/20 pb-4">
                                Mis Datos
                            </h2>

                            <div className="space-y-4 text-gray-700 text-lg">
                                <p><span className="font-bold text-[#9D7E6B]">Usuario:</span> {userDetails.username}</p>
                                <p><span className="font-bold text-[#9D7E6B]">Nombre:</span> {userDetails.name} {userDetails.surname}</p>
                                <p><span className="font-bold text-[#9D7E6B]">Correo:</span> {userDetails.email}</p>
                            </div>

                            <div className="mt-8 flex justify-between">
                                <button
                                    onClick={() => setShowProfile(false)}
                                    className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-gray-300 transition-colors shadow-md"
                                >
                                    Cerrar
                                </button>
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('user');
                                        window.location.reload();
                                    }}
                                    className="bg-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-red-600 transition-colors shadow-md"
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal - Bienvenida */}
                {showWelcome && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-500">
                        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-2xl w-full relative border-4 border-[#FAC19E] animate-in zoom-in duration-500">
                            <button
                                onClick={handleCloseWelcome}
                                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors animate-pulse"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="text-center mb-6">
                                <div className="animate-float inline-block">
                                    <img src={aloaLogo} alt="ALOA Logo" className="w-32 h-24 object-contain mx-auto mb-4" />
                                </div>
                            </div>

                            <h2 className="text-3xl font-extrabold text-[#9D7E6B] mb-6 text-center uppercase tracking-wide animate-slide-up">
                                ¡Bienvenido a ALOA!
                            </h2>

                            <div className="space-y-4 text-gray-700 text-justify leading-relaxed text-lg mb-6">
                                <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                    <span className="font-bold text-[#9D7E6B]">ALOA</span> es una plataforma dedicada a conectar corazones con perros que necesitan un hogar amoroso.
                                </p>
                                <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                    Nuestro objetivo es facilitar la <span className="font-bold text-[#9D7E6B]">adopción responsable</span> proporcionando información detallada sobre cada mascota, incluyendo sus cuidados, comportamiento, alimentación y recomendaciones para una vida feliz juntos.
                                </p>
                                <p className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
                                    Explora nuestro catálogo de perros por categoría (Raza Pequeña, Mediana o Grande), conoce sus historias, y encuentra al compañero perfecto para ti y tu familia.
                                </p>
                            </div>

                            <div className="bg-[#FDEBE2] border-l-4 border-[#9D7E6B] p-4 rounded-r-xl mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                                <p className="text-[#9D7E6B] font-semibold text-center">
                                    💝 Cada adopción salva una vida y crea un vínculo inquebrantable
                                </p>
                            </div>

                            <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
                                <button
                                    onClick={handleCloseWelcome}
                                    className="bg-[#9D7E6B] text-white px-8 py-3 rounded-full font-bold hover:bg-[#FAC19E] hover:text-[#5c4a3f] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                                >
                                    Comenzar a Explorar
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-[#9D7E6B] h-16 flex items-center justify-between px-10 text-white font-bold shadow-inner z-20">
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
