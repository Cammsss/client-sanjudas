import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDog, FaArrowLeft } from 'react-icons/fa';
import { DogDetailModal } from '../components/ui/DogDetailModal';
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
    {
        id: 1,
        name: 'Max',
        breedName: 'Chihuahua',
        image: chihuahuaImg,
        description: `Max

Hola, soy un perrito que espera su final feliz 🐾
Soy un perrito que aún cree en los finales felices. Llegué aquí con miedo, pero con ganas de amar. Cada día espero a alguien que me mire y diga: tú vienes conmigo. Soy fiel, cariñoso y agradecido; disfruto los paseos tranquilos, las caricias sinceras y dormir cerca de mi persona. No necesito lujos, solo respeto, paciencia y un hogar seguro. Si me adoptas, prometo cuidarte, escucharte y acompañarte siempre. Cambiarás mi vida para siempre y yo cambiaré la tuya con amor verdadero, alegría diaria y una lealtad que no se rompe, desde hoy juntos como familia para siempre fiel feliz.`
    },
    {
        id: 2,
        name: 'Rocky',
        breedName: 'Pomerania',
        image: pomeranianImg,
        description: `Rocky

Mi nombre aún no importa… Lo que importa es el amor que puedo darte
Hola, soy un perrito que sigue esperando su oportunidad. Mi vida no ha sido fácil, pero nunca dejé de creer en las personas buenas. Me gusta mover la colita, caminar a tu lado y dormir tranquilo sabiendo que pertenezco a un hogar. Soy cariñoso, fiel y muy agradecido; prometo cuidarte todos los días y llenarte de alegría. No necesito lujos, solo amor, paciencia y un lugar seguro. Si decides adoptarme, no sólo cambiarás mi historia, también ganarás un amigo para siempre. Aquí estoy, listo para amar sin condiciones. Te espero con esperanza, ilusión, confianza y un corazón lleno de amor.`
    },
    {
        id: 3,
        name: 'Luna',
        breedName: 'Yorkshire Terrier',
        image: yorkshireImg,
        description: `Luna

Todavía creo en los finales felices
Me llamo Esperanza, aunque aún no tenga nombre. Llegué aquí cansado, pero con el corazón intacto. Aprendí a confiar despacio, a celebrar cada caricia y a agradecer cada mirada. Soy juguetón cuando toca, tranquilo cuando lo necesitas y fiel siempre. Me adapto fácil, escuchó en silencio y acompañó sin pedir nada. Sueño con un hogar donde dormir seguro, salir a pasear y compartir sonrisas. Adoptarme es ganar compañía sincera, lealtad eterna y amor diario. Si me eliges, prometo cuidarte, alegrarte y caminar juntos todos los días. Estoy listo para empezar una nueva historia contigo hoy con paciencia y ternura verdadera.`
    },
    {
        id: 4,
        name: 'Toby',
        breedName: 'Shih Tzu',
        image: shihtzuImg,
        description: `Toby

Estoy aquí, por si me estás buscando
Dicen que soy solo un perrito, pero tengo un amor enorme. He pasado días largos esperando, mirando personas ir y venir, sin perder la fe. Soy noble, cariñoso y muy agradecido. Me gusta caminar despacio, jugar cuando hay tiempo y descansar cerca de quien quiero. No pido mucho: comida, cuidado y un lugar seguro. A cambio doy lealtad, compañía y alegría diaria. Adoptarme significa salvar una vida y ganar un amigo sincero. Si me llevas a casa, prometo cuidarte siempre, acompañarte en silencio y demostrarte que el amor verdadero existe, con paciencia, ternura, compromiso, alegría, calma, esperanza, confianza, hogar, familia.`
    },
    {
        id: 5,
        name: 'Milo',
        breedName: 'Pug (Carlino)',
        image: pugImg,
        description: `Milo

Hola, soy un perrito que espera su final feliz 🐾
Hola, soy un perrito que espera su oportunidad. Mi pasado tuvo días difíciles, pero mi corazón sigue lleno de amor. Aprendí a confiar, a mover la colita y a agradecer cada gesto. Soy tranquilo, juguetón cuando toca y fiel siempre. Me gusta caminar a tu lado, descansar cerca y cuidar de quien me quiera. No busco perfección, solo un hogar donde sentirme seguro. Adoptarme es darme una segunda oportunidad y ganar un amigo sincero. Prometo lealtad, compañía, risas, consuelo y amor diario. Aquí estoy, listo para empezar contigo hoy con paciencia respeto ternura compromiso esperanza alegría confianza familia hogar siempre.`
    },
    {
        id: 6,
        name: 'Kira',
        breedName: 'Dachshund (Perro salchicha)',
        image: dachshundImg,
        description: `Kira

Mi nombre aún no importa… Lo que importa es el amor que puedo darte
Soy un perrito pequeño de corazón gigante. Un día me quedé sin hogar, pero no sin esperanza. Aprendí a esperar con paciencia, a confiar de nuevo y a sonreír moviendo la colita. Soy cariñoso, atento y muy agradecido; disfruto los paseos, las siestas tranquilas y las caricias sinceras. No necesito lujos, solo un lugar seguro y amor constante. Si me adoptas, prometo acompañarte en silencio, cuidarte siempre y alegrar tus días. Darme una oportunidad cambiará mi vida y la tuya para siempre. Estoy listo para empezar contigo hoy mismo. Gracias por mirarme y creer; juntos construiremos hogar, familia, juegos, paz.`
    },
    {
        id: 7,
        name: 'Bruno',
        breedName: 'Bichón Maltés',
        image: malteseImg,
        description: `Bruno

Estoy aquí, por si me estás buscando
Me encontraron esperando, pero no rendido. Soy un perrito dulce que aprendió a confiar otra vez. Me gusta caminar despacio, jugar cuando hay sol y dormir tranquilo cerca de alguien. Aunque mi pasado fue incierto, mi corazón está listo para amar sin condiciones. Soy fiel, atento y agradecido; prometo cuidar, escuchar y acompañar siempre. No pido lujos, solo respeto, paciencia y un hogar seguro. Adoptarme es regalarme un futuro y ganar un amigo verdadero. Si me eliges hoy, empezaré a llenar tus días de alegría, calma y lealtad eterna. Gracias por mirarme, creer, elegir, cuidar, compartir, soñar, caminar, juntos, familia.`
    },
    {
        id: 8,
        name: 'Nala',
        breedName: 'Pinscher Miniatura',
        image: pinscherImg,
        description: `Nala

Todavía creo en los finales felices
Soy un perrito que aún cree en las segundas oportunidades. Mi camino ha tenido espera, pero también esperanza. Cada caricia me enseña que el amor existe y que un hogar puede llegar. Soy noble, cariñoso y muy leal; disfruto los paseos, los juegos sencillos y dormir tranquilo cerca de mi persona. No necesito lujos, solo paciencia, cuidado y un lugar seguro. Si me adoptas, prometo acompañarte todos los días, escucharte en silencio y protegerte con mi corazón. Cambiarás mi vida para siempre y yo llenaré la tuya de alegría, gratitud y amor verdadero.`
    },
    {
        id: 9,
        name: 'Zeus',
        breedName: 'Poodle Toy (Caniche Toy)',
        image: poodleImg,
        description: `Zeus

Mi nombre aún no importa… Lo que importa es el amor que puedo darte
Aquí estoy, esperando a quien me elija con el corazón. Soy un perrito bueno, de mirada dulce y alma paciente. He conocido la espera, pero no he perdido la ternura ni las ganas de amar. Disfruto caminar a tu lado, sentir caricias y descansar tranquilo sabiendo que pertenezco a un hogar. Soy fiel, agradecido y siempre dispuesto a acompañarte. No pido mucho: comida, cuidado y amor sincero. Si me adoptas, prometo cuidarte, alegrar tus días y ser tu amigo incondicional. Juntos podemos empezar una historia nueva, llena de juegos, paz, confianza, compañía y un hogar verdadero para siempre.`
    },
    {
        id: 10,
        name: 'Coco',
        breedName: 'Papillón',
        image: papillonImg,
        description: `Coco

Hola, soy un perrito que espera su final feliz 🐾
Soy un perrito que espera sin rendirse. Llegué con miedo, pero aprendí a confiar mirando ojos buenos. Cada día imagino un hogar donde mi nombre suene con cariño. Soy cariñoso, tranquilo y fiel; me gustan los paseos suaves, las caricias largas y dormir cerca. No necesito lujos, solo paciencia, respeto y amor. Adoptarme es darme una segunda oportunidad y ganar un compañero sincero. Prometo cuidarte, escucharte y acompañarte siempre. Si me eliges hoy, mi corazón será tuyo para siempre, llenando tu vida de alegría, calma, gratitud y amor verdadero, con lealtad diaria, juegos simples, ternura infinita y esperanza compartida juntos.`
    },
    {
        id: 11,
        name: 'Simba',
        breedName: 'Boston Terrier',
        image: bostonImg,
        description: `Simba

Mi nombre aún no importa… Lo que importa es el amor que puedo darte
Soy un perrito que sigue esperando con paciencia. Mi historia tiene silencios, pero también esperanza. Cada día miro alrededor creyendo que alguien llegará y me llevará a casa. Soy noble, cariñoso y muy fiel; disfruto caminar tranquilo, jugar un poco y descansar cerca de quien quiero. No necesito mucho para ser feliz, solo un hogar seguro, cuidado y amor verdadero. Si decides adoptarme, prometo acompañarte siempre, cuidarte y llenar tus días de alegría. Darme una oportunidad no solo cambiará mi vida, también te regalará un amigo sincero, agradecido y leal para siempre. Estoy listo para empezar contigo hoy.`
    },
    {
        id: 12,
        name: 'Thor',
        breedName: 'Pequinés',
        image: pekineseImg,
        description: `Thor

Todavía creo en los finales felices
Soy un perrito que espera su turno con calma y fe. Mi pasado fue confuso, pero mi corazón sigue abierto. Me gusta caminar a tu ritmo, jugar cuando hay ganas y dormir tranquilo cerca. Soy leal, dulce y agradecido; aprendo rápido y doy amor sincero. No busco lujos, solo respeto, paciencia y un hogar seguro. Si me adoptas, prometo cuidarte, escucharte y acompañarte siempre. Cambiarás mi vida y yo llenaré la tuya de alegría diaria, compañía fiel y ternura constante. Aquí estoy, listo para empezar juntos hoy, con juegos simples, paseos felices, confianza mutua, risas suaves y amor eterno compartido.`
    },
    {
        id: 13,
        name: 'Maya',
        breedName: 'Jack Russell Terrier',
        image: jackrussellImg,
        description: `Maya

Todavía creo en los finales felices
Soy un perrito que aún cree en las personas. Mi camino tuvo espera, frío y silencio, pero guardé ternura. Disfruto caminar despacio, jugar cuando hay sol y dormir tranquilo cerca. Soy fiel, cariñoso y agradecido; escucho, acompaño y cuido. No necesito lujos, solo paciencia, respeto y un hogar seguro. Adoptarme es darme futuro y ganar amistad sincera. Prometo lealtad diaria, risas simples y amor constante. Si me eliges hoy, empezaré a llenar tu vida de calma, alegría y confianza. Aquí estoy, listo para pertenecer, aprender, compartir y amar para siempre contigo, con paciencia, respeto, juegos, paseos, hogar, familia, esperanza real.`
    },
    {
        id: 14,
        name: 'Rex',
        breedName: 'Bichón Frisé',
        image: bichonImg,
        description: `Rex

Hola, soy un perrito que espera su final feliz 🐾
Soy un perrito que espera con el corazón abierto. No tuve un inicio fácil, pero aprendí a confiar y a amar sin miedo. Me gustan los paseos tranquilos, las caricias sinceras y dormir cerca de quien me cuida. Soy fiel, dulce y muy agradecido; siempre estoy listo para acompañarte. No necesito lujos, solo un hogar seguro y tiempo para querernos. Si me adoptas, prometo cuidarte, escucharte y alegrar tus días. Darme una oportunidad es cambiar mi destino y ganar un amigo leal. Aquí estoy, esperando comenzar contigo una historia nueva, llena de juegos, calma, ternura y amor verdadero para siempre.`
    },
    {
        id: 15,
        name: 'Lola',
        breedName: 'West Highland White Terrier (Westie)',
        image: westieImg,
        description: `Lola

Mi nombre aún no importa… Lo que importa es el amor que puedo darte
Soy un perrito que sigue esperando con paciencia. Mi historia tiene silencios, pero también esperanza. Cada día miro alrededor creyendo que alguien llegará y me llevará a casa. Soy noble, cariñoso y muy fiel; disfruto caminar tranquilo, jugar un poco y descansar cerca de quien quiero. No necesito mucho para ser feliz, solo un hogar seguro, cuidado y amor verdadero. Si decides adoptarme, prometo acompañarte siempre, cuidarte y llenar tus días de alegría. Darme una oportunidad no solo cambiará mi vida, también te regalará un amigo sincero, agradecido y leal para siempre. Estoy listo para empezar contigo hoy.`
    }
];

export const SmallBreedsPage = () => {
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
                    Razas Pequeñas
                </h1>
                <div className="w-24 hidden sm:block"></div> {/* Spacer for alignment */}
                <h1 className="flex-1 text-center text-white text-xl font-extrabold uppercase tracking-widest sm:hidden">
                    Razas Pequeñas
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
                                        {breed.breedName}
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
