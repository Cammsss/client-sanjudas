import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaPaw, FaHistory, FaInfoCircle, FaHeart } from 'react-icons/fa';
import { getDogs } from '../services/dogService';
import { AdoptionFormModal } from '../components/ui/AdoptionFormModal';

export const DogHistoryPage = () => {
    const { breedId } = useParams();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchDogDetail = async () => {
            try {
                const allDogs = await getDogs();
                const foundDog = allDogs.find(d => d._id === breedId);
                setDog(foundDog);
            } catch (error) {
                console.error("Error al obtener detalle del perro:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDogDetail();
    }, [breedId]);

    if (loading) {
        return (
            <div className="min-h-screen theme-bg flex flex-col items-center justify-center p-10 text-center">
                <FaPaw className="text-7xl text-[#9D7E6B] mb-6 animate-pulse" />
                <h1 className="text-3xl font-bold text-[#9D7E6B] mb-4">Cargando historia...</h1>
            </div>
        );
    }

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
            {/* Cabecera Creativa con Galería */}
            <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                
                {/* Galería de imágenes */}
                {dog.images && dog.images.length > 0 ? (
                    <div className="relative w-full h-full">
                        <img
                            src={dog.images[0]}
                            alt={dog.name}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        {dog.images.length > 1 && (
                            <div className="absolute bottom-4 right-4 z-20 flex gap-2">
                                {dog.images.slice(0, 4).map((img, idx) => (
                                    <div
                                        key={idx}
                                        className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors cursor-pointer"
                                        onClick={() => {
                                            const newImages = [...dog.images];
                                            const first = newImages.shift();
                                            newImages.push(first);
                                            setDog({ ...dog, images: newImages });
                                        }}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <img
                        src={dog.image}
                        alt={dog.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                )}

                {/* Botón Volver Flotante */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-30 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-[#FAC19E] hover:text-black transition-all shadow-xl group border border-white/30 animate-bounce"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Título en Imagen */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 bg-gradient-to-t from-[#9D7E6B] to-transparent">
                    <span className="bg-[#FAC19E] text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-tighter mb-4 inline-block animate-pulse">
                        {dog.category}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl animate-in slide-in-from-bottom duration-700">
                        {dog.name}
                    </h1>
                </div>
            </div>

            {/* Contenido de la Historia */}
            <main className="flex-1 relative -mt-10 z-30 px-4 md:px-0">
                <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border-2 border-[#FAC19E]/30 mb-20 animate-in fade-in slide-in-from-bottom duration-700">
                    <div className="grid grid-cols-1 md:grid-cols-12">

                        {/* Panel Lateral Decorativo */}
                        <div className="md:col-span-1 bg-[#FAC19E]/50 hidden md:flex flex-col items-center justify-around py-20 text-[#9D7E6B]">
                            <FaPaw className="text-2xl opacity-20 animate-spin-slow" />
                            <FaPaw className="text-2xl opacity-50 animate-pulse" />
                            <FaPaw className="text-2xl animate-bounce" />
                            <FaPaw className="text-2xl opacity-50 animate-pulse" />
                            <FaPaw className="text-2xl opacity-20 animate-spin-slow" />
                        </div>

                        {/* Texto Principal */}
                        <div className="md:col-span-11 p-8 md:p-16">
                            <div className="flex items-center gap-4 mb-10 text-[#9D7E6B] animate-in slide-in-from-left duration-500">
                                <div className="bg-[#FAC19E] p-4 rounded-2xl shadow-inner animate-pulse">
                                    <FaHistory className="text-3xl" />
                                </div>
                                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
                                    Su Historia y Legado
                                </h2>
                            </div>

                            <div className="relative">
                                {/* Decoración de Comillas */}
                                <span className="absolute -top-10 -left-6 text-9xl text-[#FAC19E]/30 font-serif leading-none italic pointer-events-none animate-pulse">
                                    "
                                </span>

                                <p className="text-xl md:text-2xl text-[#5c4a3f] leading-relaxed font-medium mb-12 relative z-10 italic animate-in fade-in duration-700">
                                    {dog.history}
                                </p>

                                {/* Sección de Videos */}
                                {dog.videos && dog.videos.length > 0 && (
                                    <div className="mb-12 animate-in slide-in-from-right duration-700">
                                        <h3 className="text-[#9D7E6B] font-black uppercase text-lg mb-4 flex items-center gap-2">
                                            <FaPaw className="text-[#FAC19E]" /> Videos
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {dog.videos.map((video, idx) => (
                                                <video
                                                    key={idx}
                                                    controls
                                                    className="w-full rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
                                                >
                                                    <source src={video} type="video/mp4" />
                                                    Tu navegador no soporta videos.
                                                </video>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Galería de imágenes adicionales */}
                                {dog.images && dog.images.length > 1 && (
                                    <div className="mb-12 animate-in slide-in-from-left duration-700">
                                        <h3 className="text-[#9D7E6B] font-black uppercase text-lg mb-4 flex items-center gap-2">
                                            <FaPaw className="text-[#FAC19E]" /> Más Fotos
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {dog.images.slice(1).map((img, idx) => (
                                                <img
                                                    key={idx}
                                                    src={img}
                                                    alt={`${dog.name} foto ${idx + 2}`}
                                                    className="w-full h-32 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
                                                    onClick={() => window.open(img, '_blank')}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="bg-[#FDEBE2] border-l-8 border-[#9D7E6B] p-8 rounded-r-3xl rounded-bl-3xl shadow-lg relative overflow-hidden group mb-12 animate-in fade-in duration-700">
                                    <FaInfoCircle className="absolute -right-4 -top-4 text-8xl text-[#9D7E6B]/5 group-hover:rotate-12 transition-transform" />
                                    <h3 className="text-[#9D7E6B] font-black uppercase text-lg mb-2 flex items-center gap-2">
                                        ¿Lo sabías? <FaPaw className="text-[#FAC19E] animate-bounce" />
                                    </h3>
                                    <p className="text-[#9D7E6B]/80 font-semibold leading-relaxed">
                                        Esta raza se caracteriza por su temperamento único y su capacidad de crear vínculos inquebrantables con las personas que ama.
                                    </p>
                                </div>

                                {/* Botón de Adopción */}
                                <div className="flex justify-center md:justify-start">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-[#9D7E6B] text-white text-xl font-black py-5 px-12 rounded-2xl shadow-2xl hover:bg-[#FAC19E] hover:text-[#5c4a3f] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-4 group uppercase tracking-tighter animate-in slide-in-from-bottom duration-700"
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
