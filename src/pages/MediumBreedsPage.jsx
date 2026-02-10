import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import beagleImg from '../assets/breeds/beagle.jpg';
import borderCollieImg from '../assets/breeds/bordercollie.jpg';
import cockerSpanielImg from '../assets/breeds/cockerspaniel.jpg';
import englishBulldogImg from '../assets/breeds/englishbulldog.jpg';
import huskyImg from '../assets/breeds/husky.jpg';
import australianShepherdImg from '../assets/breeds/australianshepherd.jpg';
import malamuteImg from '../assets/breeds/malamute.jpg';
import whippetImg from '../assets/breeds/whippet.jpg';
import bassetHoundImg from '../assets/breeds/bassethound.jpg';
import dalmatianImg from '../assets/breeds/dalmatian.jpg';
import bullTerrierImg from '../assets/breeds/bullterrier.jpg';
import schnauzerImg from '../assets/breeds/schnauzer.jpg';
import pitbullImg from '../assets/breeds/pitbull.jpg';
import samoyedImg from '../assets/breeds/samoyed.jpg';
import akitaImg from '../assets/breeds/akita.jpg';

const breeds = [
    { id: 1, name: 'Beagle', image: beagleImg },
    { id: 2, name: 'Border Collie', image: borderCollieImg },
    { id: 3, name: 'Cocker Spaniel', image: cockerSpanielImg },
    { id: 4, name: 'Bulldog Inglés', image: englishBulldogImg },
    { id: 5, name: 'Husky Siberiano', image: huskyImg },
    { id: 6, name: 'Pastor Australiano', image: australianShepherdImg },
    { id: 7, name: 'Alaskan Malamute', image: malamuteImg },
    { id: 8, name: 'Whippet', image: whippetImg },
    { id: 9, name: 'Basset Hound', image: bassetHoundImg },
    { id: 10, name: 'Dálmata', image: dalmatianImg },
    { id: 11, name: 'Bull Terrier', image: bullTerrierImg },
    { id: 12, name: 'Schnauzer Mediano', image: schnauzerImg },
    { id: 13, name: 'Pitbull Terrier', image: pitbullImg },
    { id: 14, name: 'Samoyedo', image: samoyedImg },
    { id: 15, name: 'Akita Inu', image: akitaImg },
];

export const MediumBreedsPage = () => {
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
                    Razas Medianas
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
