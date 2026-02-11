import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { DogDetailModal } from '../components/ui/DogDetailModal';
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
    {
        id: 1,
        name: 'Beagle',
        image: beagleImg,
        description: `Toby

En una esquina del barrio apareció Toby, un perrito pequeño de ojos brillantes y cola inquieta. Nadie sabía de dónde venía, pero todos notaron su paciencia y ternura. Cada mañana esperaba sentado, soñando con una familia. Toby no pide lujos: solo un plato de comida, paseos al atardecer y una cama tibia. A cambio ofrece lealtad infinita, juegos sin fin y abrazos sinceros. Adoptar a Toby no es rescatarlo a él; es encontrar un amigo que llenará tu casa de alegría, risas y amor verdadero. Hoy puede empezar una historia nueva contigo, llena de cuidado, responsabilidad y felicidad compartida diaria.`
    },
    {
        id: 2,
        name: 'Border Collie',
        image: borderCollieImg,
        description: `Luna

Luna llegó al refugio en silencio, con miedo y una mirada triste. Pasaron los días y comenzó a confiar: movía la cola, buscaba caricias y seguía a todos. Luna sueña con un hogar donde la esperen al final del día. No necesita grandes cosas, solo amor, paciencia y un espacio para correr. Adoptarla significa darle una segunda oportunidad y ganar una amiga fiel. Luna llenará tus días de ternura, tus paseos de alegría y tu casa de paz. Ella está lista para amar sin condiciones. ¿Te animas a cambiar su historia hoy?`
    },
    {
        id: 3,
        name: 'Cocker Spaniel',
        image: cockerSpanielImg,
        description: `Max
Max es un perrito curioso que ama explorar el mundo. Aunque fue abandonado, nunca perdió la alegría. Cada vez que alguien se acerca, salta emocionado esperando atención. Max sueña con una familia que lo lleve a caminar, juegue con él y le diga que todo estará bien. Adoptarlo es elegir amor sincero, compañía constante y risas diarias. Max promete cuidar tu hogar y tu corazón. No compres, adopta y dale la oportunidad de tener el hogar que siempre esperó. Max no busca perfección, solo alguien que lo quiera para siempre.`
    },
    {
        id: 4,
        name: 'Bulldog Inglés',
        image: englishBulldogImg,
        description: `Coco
Coco pasó mucho tiempo solo, pero jamás dejó de creer en las personas. En el refugio es el primero en saludar y el último en dormir. Coco es noble, cariñoso y protector. Le encanta descansar cerca de quien quiere, como si cuidara sueños. Adoptar a Coco es abrirle la puerta a un amor silencioso y leal. Él no juzga, no guarda rencor y siempre perdona. Solo espera una familia que le enseñe que esta vez no será abandonado. Coco está listo para acompañarte en cada etapa de tu vida con amor infinito.`
    },
    {
        id: 5,
        name: 'Husky Siberiano',
        image: huskyImg,
        description: `Nala
Nala es pequeña, dulce y muy juguetona. Su pasado fue difícil, pero su corazón sigue intacto. Corre feliz cuando escucha pasos, esperando que alguien la elija. Nala necesita un hogar donde pueda sentirse segura y amada. Adoptarla es enseñarle que el mundo también puede ser bueno. Ella te dará sonrisas, compañía y momentos inolvidables. No pide mucho, solo un lugar donde dormir y brazos que la abracen. Nala no busca lujos, busca una familia. Tal vez tú seas la persona que estaba esperando desde siempre con ilusión y esperanza.`
    },
    {
        id: 6,
        name: 'Pastor Australiano',
        image: australianShepherdImg,
        description: `Rocky
Rocky es un perrito fuerte por fuera y sensible por dentro. Aunque fue dejado atrás, nunca perdió la confianza. Le encanta jugar, correr y recibir caricias largas. Rocky sería el compañero perfecto para aventuras y tardes tranquilas. Adoptarlo significa comprometerse, pero también ganar un amigo que jamás te fallará. Él te cuidará, te escuchará y estará contigo incluso en los días difíciles. Rocky no entiende de abandono, solo de amor. Dale la oportunidad de tener un hogar definitivo y demuestra que aún existen personas buenas dispuestas a amar sin condiciones.`
    },
    {
        id: 7,
        name: 'Alaskan Malamute',
        image: malamuteImg,
        description: `Milo
Milo es tranquilo y observador. Prefiere sentarse a tu lado antes que correr sin parar. Sus ojos reflejan gratitud y dulzura. Milo fue rescatado y ahora espera un hogar donde pasar el resto de su vida. Adoptarlo es regalarle calma, estabilidad y cariño. Él promete compañía silenciosa, miradas sinceras y amor constante. Milo se adapta fácilmente y agradece cada gesto. No busca atención exagerada, solo alguien que lo elija todos los días. Milo está listo para empezar una nueva vida, donde el abandono sea solo un recuerdo lejano.`
    },
    {
        id: 8,
        name: 'Whippet',
        image: whippetImg,
        description: `Canela
Canela es una perrita llena de energía y amor. Ama jugar, correr y compartir momentos. A pesar de haber sido ignorada, sigue confiando en las personas. Canela sueña con una familia que la cuide y la incluya. Adoptarla es ganar una amiga alegre y fiel. Ella llenará tu hogar de movimiento, risas y ternura. Canela no guarda rencores, solo espera una oportunidad. Dale un hogar y ella te dará su corazón completo. Adoptar cambia vidas, la de ella y la tuya. Canela está lista para comenzar una historia de amor verdadero.`
    },
    {
        id: 9,
        name: 'Basset Hound',
        image: bassetHoundImg,
        description: `Coco
Bruno es grande, pero su corazón es aún más grande. Es protector, noble y muy cariñoso. Le encanta acompañar y sentirse parte de una familia. Bruno fue abandonado, pero no perdió la esperanza. Adoptarlo significa darle estabilidad y recibir lealtad absoluta. Él cuidará tu hogar y estará contigo siempre. Bruno necesita espacio, paciencia y amor. A cambio ofrece compañía eterna. No lo juzgues por su tamaño, conoce su corazón. Bruno no quiere pasar su vida en un refugio. Quiere una familia que lo elija y no lo deje jamás.`
    },
    {
        id: 10,
        name: 'Dálmata',
        image: dalmatianImg,
        description: `Kiara
Kiara es curiosa y muy inteligente. Aprende rápido y disfruta la compañía humana. Aunque su inicio fue duro, hoy confía y sonríe. Kiara necesita un hogar donde pueda crecer y sentirse segura. Adoptarla es asumir responsabilidad, pero también recibir amor puro. Ella te seguirá a todas partes y celebrará cada momento contigo. Kiara no entiende por qué fue abandonada, pero está lista para amar de nuevo. Con paciencia y cariño, se convertirá en tu mejor amiga. Dale la oportunidad de tener una vida digna y feliz, llena de juegos y cuidado.`
    },
    {
        id: 11,
        name: 'Bull Terrier',
        image: bullTerrierImg,
        description: `Simba
Simba es un perrito noble y tranquilo. Prefiere observar antes de actuar. Sus caricias favoritas son lentas y sinceras. Simba fue rescatado y ahora espera una familia que no lo abandone. Adoptarlo es ofrecerle seguridad y recibir amor silencioso. Él estará a tu lado sin pedir nada a cambio. Simba es ideal para un hogar tranquilo, lleno de respeto y afecto. No necesita mucho espacio, solo un corazón dispuesto. Simba no busca perfección, busca estabilidad. Él está listo para ser parte de tu vida y acompañarte en cada momento.`
    },
    {
        id: 12,
        name: 'Schnauzer Mediano',
        image: schnauzerImg,
        description: `Pelusa
Pelusa es suave, pequeña y muy tierna. Le encanta dormir cerca y sentirse protegida. A pesar de su pasado, sigue siendo dulce y confiada. Pelusa necesita un hogar donde la cuiden y la amen. Adoptarla es enseñarle que no todos se van. Ella te dará cariño, compañía y tranquilidad. Pelusa se adapta fácilmente y agradece cada gesto. No requiere grandes cuidados, solo amor constante. Pelusa espera ser elegida y prometida para siempre. Tal vez tu hogar sea el lugar donde por fin se sienta segura y feliz.`
    },
    {
        id: 13,
        name: 'Pitbull Terrier',
        image: pitbullImg,
        description: `Thor
Thor es activo, valiente y muy leal. Le gusta correr, jugar y compartir tiempo con personas. Thor fue abandonado, pero sigue creyendo. Adoptarlo es comprometerse con su bienestar y disfrutar su energía. Él será tu compañero de aventuras y tu guardián fiel. Thor necesita ejercicio, cariño y disciplina. A cambio ofrece amor incondicional. No dejes que crezca sin familia. Thor merece una vida digna y feliz. Adoptar es un acto de amor y responsabilidad. Él está listo para comenzar una nueva historia contigo.`
    },
    {
        id: 14,
        name: 'Samoyedo',
        image: samoyedImg,
        description: `Estrella
Estrella llegó al refugio asustada, pero hoy brilla con esperanza. Es dulce, paciente y muy cariñosa. Estrella sueña con un hogar donde nunca más tenga miedo. Adoptarla es devolverle la confianza en el mundo. Ella llenará tu vida de ternura y gratitud. Estrella no pide lujos, solo amor y cuidado. Cada caricia la hace creer de nuevo. Dale la oportunidad de ser parte de una familia. Estrella promete acompañarte siempre, incluso en silencio. Ella está lista para dejar atrás el pasado y comenzar una vida llena de amor.`
    },
    {
        id: 15,
        name: 'Akita Inu',
        image: akitaImg,
        description: `Toby

Toby es alegre, juguetón y muy sociable. Ama a las personas y busca atención con ternura. Toby fue abandonado, pero no perdió la sonrisa. Adoptarlo es regalarle estabilidad y recibir felicidad diaria. Él llenará tu hogar de juegos y afecto. Toby necesita amor, paseos y tiempo. A cambio ofrece lealtad y compañía eterna. No permitas que crezca sin familia. Toby merece un hogar donde lo cuiden y respeten. Adoptar no cambia solo su vida, también transforma la tuya con amor verdadero y momentos inolvidables compartidos.`
    }
];

export const MediumBreedsPage = () => {
    const navigate = useNavigate();
    const [selectedBreed, setSelectedBreed] = useState(null);

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
                    Razas Medianas
                </h1>
                <div className="w-24 hidden sm:block"></div> {/* Spacer for alignment */}
                <h1 className="flex-1 text-center text-white text-xl font-extrabold uppercase tracking-widest sm:hidden">
                    Razas Medianas
                </h1>
            </header>

            <main className="flex-1 p-8 md:p-12">
                <div className="max-w-7xl mx-auto">
                    <p className="text-center text-[#5c3d2e] mb-8 italic text-lg font-medium opacity-80">
                        Haz clic en una mascota para conocer su historia
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {breeds.map((breed) => (
                            <div
                                key={breed.id}
                                onClick={() => setSelectedBreed(breed)}
                                className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border-2 border-[#9D7E6B]/20 hover:scale-105 transition-transform duration-300 group cursor-pointer"
                            >
                                <div className="h-64 bg-[#FDEBE2] relative flex items-center justify-center overflow-hidden">
                                    <img
                                        src={breed.image}
                                        alt={breed.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={handleImageError}
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="bg-[#FAC19E] text-[#5c3d2e] font-bold py-2 px-6 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                            VER HISTORIA
                                        </span>
                                    </div>
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

            {/* Modal */}
            <DogDetailModal
                isOpen={!!selectedBreed}
                onClose={() => setSelectedBreed(null)}
                dog={selectedBreed}
            />
        </div>
    );
};
