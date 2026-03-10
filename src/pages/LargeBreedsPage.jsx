import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { getDogs } from '../services/dogService';
import { DogDetailModal } from '../components/ui/DogDetailModal';

export const LargeBreedsPage = () => {
    const navigate = useNavigate();
    const [dogs, setDogs] = useState([]);
    const [selectedDog, setSelectedDog] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const allDogs = await getDogs();
                const largeBreeds = allDogs.filter(dog => dog.category === 'Raza Grande');
                setDogs(largeBreeds);
            } catch (error) {
                console.error("Error al cargar perros:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDogs();
    }, []);

    const handleDogClick = (dog) => {
        setSelectedDog(dog);
        setIsModalOpen(true);
    };

    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/400x300/FAC19E/9D7E6B?text=ALOA+Mascotas';
        e.target.onerror = null;
    };

    return (
        <div className="min-h-screen w-full theme-bg font-sans flex flex-col">
            {/* Header */}
            <header className="bg-[#9D7E6B] h-20 flex items-center px-10 shadow-md z-20 sticky top-0">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 bg-[#FAC19E] text-black px-4 py-2 rounded-full font-bold hover:bg-[#e9b392] transition-colors shadow-md text-sm uppercase cursor-pointer"
                >
                    <FaArrowLeft /> Volver
                </button>
                <h1 className="flex-1 text-center text-white text-2xl font-extrabold uppercase tracking-widest hidden sm:block">
                    Razas Grandes
                </h1>
                <div className="w-24 hidden sm:block"></div>
                <h1 className="flex-1 text-center text-white text-xl font-extrabold uppercase tracking-widest sm:hidden">
                    Razas Grandes
                </h1>
            </header>

            <main className="flex-1 p-8 md:p-12">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-[#5c3d2e] mb-8 italic text-lg font-medium opacity-80">
                        Haz clic en una mascota para conocer su historia
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {loading ? (
                            <p className="text-center col-span-full">Cargando...</p>
                        ) : dogs.length === 0 ? (
                            <p className="text-center col-span-full">No se encontraron mascotas.</p>
                        ) : dogs.map((dog) => (
                            <div
                                key={dog._id}
                                onClick={() => handleDogClick(dog)}
                                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-[#9D7E6B]/20 hover:scale-105 transition-transform duration-300 group cursor-pointer"
                            >
                                <div className="h-64 bg-[#FDEBE2] relative flex items-center justify-center overflow-hidden">
                                    <img
                                        src={dog.image.startsWith('http') || dog.image.startsWith('/') ? dog.image : `/src/assets/breeds/${dog.image}`}
                                        alt={dog.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={handleImageError}
                                    />
                                    <div className="absolute top-4 left-4 pointer-events-none">
                                        <span className="bg-[#9D7E6B]/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                            {dog.breedName}
                                        </span>
                                    </div>

                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <span className="bg-[#FAC19E] text-[#5c3d2e] font-bold py-2 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            VER HISTORIA
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4 bg-[#9D7E6B] text-center">
                                    <h2 className="text-white font-bold uppercase tracking-wide text-sm truncate">
                                        {dog.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <DogDetailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                dog={selectedDog}
            />

            <footer className="bg-[#9D7E6B] h-16 flex items-center justify-center text-white font-bold shadow-inner z-20">
                <p className="text-sm tracking-widest uppercase">ALOA - Amor por las Mascotas</p>
            </footer>
        </div>
    );
};
