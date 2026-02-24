import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPaw, FaHistory, FaInfoCircle, FaHeart } from 'react-icons/fa';
import { dogData } from '../data/dogData';
import { AdoptionFormModal } from '../components/ui/AdoptionFormModal';

export const DogHistoryPage = () => {
    const { breedId } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Buscar el perro en la data
    const dog = dogData.find(d => d.id === breedId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!dog) {
        return (
            <div className="min-h-screen theme-bg flex flex-col items-center justify-center p-10 text-center">
                <FaPaw className="text-7xl text-[#9D7E6B] mb-6 animate-bounce" />
                <h1 className="text-3xl font-bold text-[#9D7E6B] mb-4">¡Ups! Perrito no encontrado</h1>
                <p className="text-[#9D7E6B]/70 mb-8 max-w-md">No pudimos encontrar la historia de esta raza en nuestra base de datos.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-[#9D7E6B] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#7d6556] transition-all transform hover:scale-105 flex items-center gap-2"
                >
                    <FaArrowLeft /> Volver atrás
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full theme-bg font-sans flex flex-col overflow-x-hidden">
            {/* Cabecera Creativa */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <img
                    src={dog.image}
                    alt={dog.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />

                {/* Botón Volver Flotante */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-30 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-[#FAC19E] hover:text-black transition-all shadow-xl group border border-white/30"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Título en Imagen */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 bg-gradient-to-t from-[#9D7E6B] to-transparent">
                    <span className="bg-[#FAC19E] text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-tighter mb-4 inline-block">
                        {dog.category}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                        {dog.name}
                    </h1>
                </div>
            </div>

            {/* Contenido de la Historia */}
            <main className="flex-1 relative -mt-10 z-30 px-4 md:px-0">
                <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border-2 border-[#FAC19E]/30 mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-12">

                        {/* Panel Lateral Decorativo */}
                        <div className="md:col-span-1 bg-[#FAC19E]/50 hidden md:flex flex-col items-center justify-around py-20 text-[#9D7E6B]">
                            <FaPaw className="text-2xl opacity-20" />
                            <FaPaw className="text-2xl opacity-50" />
                            <FaPaw className="text-2xl" />
                            <FaPaw className="text-2xl opacity-50" />
                            <FaPaw className="text-2xl opacity-20" />
                        </div>

                        {/* Texto Principal */}
                        <div className="md:col-span-11 p-8 md:p-16">
                            <div className="flex items-center gap-4 mb-10 text-[#9D7E6B]">
                                <div className="bg-[#FAC19E] p-4 rounded-2xl shadow-inner">
                                    <FaHistory className="text-3xl" />
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
                                    Su Historia y Legado
                                </h2>
                            </div>

                            <div className="relative">
                                {/* Decoración de Comillas */}
                                <span className="absolute -top-10 -left-6 text-9xl text-[#FAC19E]/30 font-serif leading-none italic pointer-events-none">
                                    "
                                </span>

                                <p className="text-xl md:text-2xl text-[#5c4a3f] leading-relaxed font-medium mb-12 relative z-10 italic">
                                    {dog.history}
                                </p>

                                <div className="bg-[#FDEBE2] border-l-8 border-[#9D7E6B] p-8 rounded-r-3xl rounded-bl-3xl shadow-lg relative overflow-hidden group mb-12">
                                    <FaInfoCircle className="absolute -right-4 -top-4 text-8xl text-[#9D7E6B]/5 group-hover:rotate-12 transition-transform" />
                                    <h3 className="text-[#9D7E6B] font-black uppercase text-lg mb-2 flex items-center gap-2">
                                        ¿Lo sabías? <FaPaw className="text-[#FAC19E]" />
                                    </h3>
                                    <p className="text-[#9D7E6B]/80 font-semibold leading-relaxed">
                                        Esta raza se caracteriza por su temperamento único y su capacidad de crear vínculos inquebrantables con las personas que ama.
                                    </p>
                                </div>

                                {/* Botón de Adopción */}
                                <div className="flex justify-center md:justify-start">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-[#9D7E6B] text-white text-xl font-black py-5 px-12 rounded-2xl shadow-2xl hover:bg-[#FAC19E] hover:text-[#5c4a3f] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-4 group uppercase tracking-tighter"
                                    >
                                        <FaHeart className="text-white group-hover:text-red-500 animate-pulse" />
                                        Adoptar a {dog.name}
                                        <FaPaw className="text-[#FAC19E] group-hover:rotate-12 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <AdoptionFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                dogName={dog.name}
            />

            {/* Footer Temático */}
            <footer className="bg-[#9D7E6B] p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#FAC19E]"></div>
                <FaPaw className="text-5xl opacity-10 absolute -bottom-4 -left-4 rotate-45" />
                <FaPaw className="text-5xl opacity-10 absolute -top-4 -right-4 -rotate-12" />
                <h3 className="text-2xl font-black uppercase tracking-widest mb-4">ALOA - Amor por las Mascotas</h3>
                <p className="text-white/60 text-sm font-bold tracking-widest uppercase">Conecta con la historia de tu mejor amigo</p>
            </footer>
        </div>
    );
};
