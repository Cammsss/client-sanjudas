import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDog, FaArrowLeft } from 'react-icons/fa';
import chihuahuaImg from '../assets/breeds/chihuahua.png';
import pomeranianImg from '../assets/breeds/pomeranian.png';
import yorkshireImg from '../assets/breeds/yorkshire.png';
import shihtzuImg from '../assets/breeds/shihtzu.jpg';
import pugImg from '../assets/breeds/pug.jpg';
import dachshundImg from '../assets/breeds/dachshund.jpg';
import malteseImg from '../assets/breeds/frise.jpg';
import pinscherImg from '../assets/breeds/pinscher.jpg';
import poodleImg from '../assets/breeds/poodle.jpg';
import papillonImg from '../assets/breeds/papillon.jpg';
import bostonImg from '../assets/breeds/boston.jpg';
import pekineseImg from '../assets/breeds/pekinese.jpg';
import jackrussellImg from '../assets/breeds/jackrussell.jpg';
import bichonImg from '../assets/breeds/bichon.webp';
import westieImg from '../assets/breeds/westie.jpg';

const breeds = [
    { id: 1, name: 'Chihuahua', image: chihuahuaImg },
    { id: 2, name: 'Pomerania', image: pomeranianImg },
    { id: 3, name: 'Yorkshire Terrier', image: yorkshireImg },
    { id: 4, name: 'Shih Tzu', image: shihtzuImg },
    { id: 5, name: 'Pug (Carlino)', image: pugImg },
    { id: 6, name: 'Dachshund (Perro salchicha)', image: dachshundImg },
    { id: 7, name: 'Bichón Maltés', image: malteseImg },
    { id: 8, name: 'Pinscher Miniatura', image: pinscherImg },
    { id: 9, name: 'Poodle Toy (Caniche Toy)', image: poodleImg },
    { id: 10, name: 'Papillón', image: papillonImg },
    { id: 11, name: 'Boston Terrier', image: bostonImg },
    { id: 12, name: 'Pequinés', image: pekineseImg },
    { id: 13, name: 'Jack Russell Terrier', image: jackrussellImg },
    { id: 14, name: 'Bichón Frisé', image: bichonImg },
    { id: 15, name: 'West Highland White Terrier (Westie)', image: westieImg },
];

export const SmallBreedsPage = () => {
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
                    Razas Pequeñas
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
