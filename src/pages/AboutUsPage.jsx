import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaPaw, FaArrowLeft } from 'react-icons/fa';
import aloaLogo from '../assets/aloa_logo_final.png';
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

export const AboutUsPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const isVerified = searchParams.get('verified') === 'true';
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (isVerified) {
            setShowConfetti(true);
        }
    }, [isVerified]);

    return (
        <div className="min-h-screen w-full theme-bg font-sans flex flex-col">
            {/* Header */}
            <header className="bg-[#9D7E6B] h-20 flex items-center px-10 shadow-md z-20 sticky top-0 justify-between">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 bg-[#FAC19E] text-black px-4 py-2 rounded-full font-bold hover:bg-[#e9b392] transition-colors shadow-md text-sm uppercase cursor-pointer"
                >
                    <FaArrowLeft /> Volver al Inicio
                </button>
                <div className="text-white font-bold text-xl uppercase tracking-widest">ALOA - Nosotros</div>
            </header>

            <main className="flex-1 p-8 md:p-12 flex flex-col items-center justify-center">
                <div className="max-w-4xl w-full bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border-4 border-[#9D7E6B]">

                    {/* Verification Banner */}
                    {isVerified && (
                        <div className="bg-green-100 border-b-4 border-green-500 p-6 flex flex-col items-center justify-center text-center animate-in slide-in-from-top duration-700">
                            <div className="flex items-center gap-3 mb-2">
                                <FaCheckCircle className="text-green-500 text-4xl" />
                                <h2 className="text-2xl font-extrabold text-green-800 uppercase">¡Identidad Verificada!</h2>
                            </div>
                            <p className="text-green-700 font-medium">
                                Gracias por confirmar tu correo electrónico. Ahora eres parte de la comunidad ALOA.
                            </p>
                        </div>
                    )}

                    <div className="p-8 md:p-12">
                        {/* Logo & Intro */}
                        <div className="flex flex-col items-center mb-10">
                            <img src={aloaLogo} alt="ALOA Logo" className="w-32 h-32 object-contain mb-6 drop-shadow-md" />
                            <h1 className="text-4xl font-extrabold text-[#9D7E6B] uppercase tracking-wide text-center mb-4">
                                ¿Quiénes Somos?
                            </h1>
                            <div className="w-24 h-1 bg-[#FAC19E] rounded-full mb-8"></div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed text-lg text-justify">
                            <div className="space-y-6">
                                <p>
                                    <span className="font-bold text-[#9D7E6B] text-xl">ALOA</span> es una comunidad creada por estudiantes y pensada para todas las personas que aman a los perros.
                                </p>
                                <p>
                                    Si estás buscando adoptar a tu nuevo compañero de vida o ya tienes un perro en casa, en <span className="font-bold text-[#9D7E6B]">ALOA</span> encontrarás información útil para que tú y tu familia puedan brindarle una vida feliz y saludable.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <p>
                                    Nuestra plataforma cuenta con un catálogo actualizado de perros disponibles para adopción. Cada uno tiene una ficha informativa con detalles importantes que te ayudarán a encontrar al amigo ideal según tu estilo de vida y familia.
                                </p>
                                <p>
                                    En <span className="font-bold text-[#9D7E6B]">ALOA</span> creemos que el cuidado de las mascotas es fundamental, por eso también compartimos información sobre atención veterinaria, calendarios de vacunación y recomendaciones básicas.
                                </p>
                            </div>
                        </div>

                        {/* Mision/Vision Summaries */}
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-[#FDEBE2] p-6 rounded-2xl border-2 border-[#FAC19E] hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-2 mb-3">
                                    <FaPaw className="text-[#9D7E6B]" />
                                    <h3 className="font-bold text-[#9D7E6B] uppercase">Nuestra Misión</h3>
                                </div>
                                <p className="text-sm italic text-gray-600">
                                    Promover la adopción responsable y brindar orientación sobre el cuidado de mascotas.
                                </p>
                            </div>
                            <div className="bg-[#FDEBE2] p-6 rounded-2xl border-2 border-[#FAC19E] hover:shadow-lg transition-shadow">
                                <div className="flex items-center gap-2 mb-3">
                                    <FaPaw className="text-[#9D7E6B]" />
                                    <h3 className="font-bold text-[#9D7E6B] uppercase">Nuestra Visión</h3>
                                </div>
                                <p className="text-sm italic text-gray-600">
                                    Ser una plataforma líder en concienciación sobre adopción y cuidado animal.
                                </p>
                            </div>
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
