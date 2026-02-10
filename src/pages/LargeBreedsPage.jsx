import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import germanShepherdImg from '../assets/breeds/germanshepherd.jpg';
import goldenRetrieverImg from '../assets/breeds/goldenretriever.jpg';
import labradorImg from '../assets/breeds/labrador.jpg';
import rottweilerImg from '../assets/breeds/rottweiler.jpg';
import greatDaneImg from '../assets/breeds/greatdane.jpg';
import stBernardImg from '../assets/breeds/stbernard.jpg';
import dobermanImg from '../assets/breeds/doberman.jpg';
import englishMastiffImg from '../assets/breeds/englishmastiff.jpg';
import akitaImg from '../assets/breeds/akita.jpg';
import malamuteImg from '../assets/breeds/malamute.jpg';
import newfoundlandImg from '../assets/breeds/newfoundland.jpg';
import berneseMountainImg from '../assets/breeds/bernesemountain.jpg';
import caneCorsoImg from '../assets/breeds/canecorso.jpg';
import malinoisImg from '../assets/breeds/malinois.jpg'; // Using Malinois for Belgian Shepherd
import dogoArgentinoImg from '../assets/breeds/dogoargentino.jpg';

const breeds = [
    { id: 1, name: 'Pastor Alemán', image: germanShepherdImg },
    { id: 2, name: 'Golden Retriever', image: goldenRetrieverImg },
    { id: 3, name: 'Labrador Retriever', image: labradorImg },
    { id: 4, name: 'Rottweiler', image: rottweilerImg },
    { id: 5, name: 'Gran Danés', image: greatDaneImg },
    { id: 6, name: 'San Bernardo', image: stBernardImg },
    { id: 7, name: 'Dóberman Pinscher', image: dobermanImg },
    { id: 8, name: 'Mastín Inglés', image: englishMastiffImg },
    { id: 9, name: 'Akita Inu', image: akitaImg },
    { id: 10, name: 'Alaskan Malamute', image: malamuteImg },
    { id: 11, name: 'Terranova', image: newfoundlandImg },
    { id: 12, name: 'Boyero de Berna', image: berneseMountainImg },
    { id: 13, name: 'Cane Corso', image: caneCorsoImg },
    { id: 14, name: 'Pastor Belga', image: malinoisImg },
    { id: 15, name: 'Dogo Argentino', image: dogoArgentinoImg },
];

export const LargeBreedsPage = () => {
    const navigate = useNavigate();

    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/400x300/FAC19E/9D7E6B?text=ALOA+Mascotas';
        e.target.onerror = null;
    };

    return (
        <div className="min-h-screen w-full theme-bg font-sans flex flex-col">
            {/* Header */}
            <header className="bg-[#9D7E6B] h-20 flex items-center px-10 shadow-md z-20">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 bg-[#FAC19E] text-black px-4 py-2 rounded-full font-bold hover:bg-[#e9b392] transition-colors shadow-md text-sm uppercase"
                >
                    <FaArrowLeft /> Volver
                </button>
                <h1 className="flex-1 text-center text-white text-2xl font-extrabold uppercase tracking-widest">
                    Razas Grandes
                </h1>
                <div className="w-24"></div> {/* Spacer for alignment */}
            </header>

            <main className="flex-1 p-8 md:p-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {breeds.map((breed) => (
                            <div
                                key={breed.id}
                                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-[#9D7E6B]/20 hover:scale-105 transition-transform duration-300 group"
                            >
                                <div className="h-64 bg-[#FDEBE2] relative flex items-center justify-center">
                                    <img
                                        src={breed.image}
                                        alt={breed.name}
                                        className="w-full h-full object-cover"
                                        onError={handleImageError}
                                    />
                                </div>
                                <div className="p-4 bg-[#9D7E6B] text-center">
                                    <h2 className="text-white font-bold uppercase tracking-wide text-sm truncate">
                                        {breed.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#9D7E6B] h-16 flex items-center justify-center text-white font-bold shadow-inner z-20">
                <p className="text-sm tracking-widest uppercase">ALOA - Amor por las Mascotas</p>
            </footer>
        </div>
    );
};
