import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { DogDetailModal } from '../components/ui/DogDetailModal';
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
import malinoisImg from '../assets/breeds/malinois.jpg';
import dogoArgentinoImg from '../assets/breeds/dogoargentino.jpg';

const breeds = [
    {
        id: 1,
        name: 'Pastor Alemán',
        image: germanShepherdImg,
        description: `Bobby 
Bobby fue encontrado bajo la lluvia, temblando, pero sin perder la esperanza. Cuando alguien se acercó, movió la cola con timidez. Bobby es un perrito noble, agradecido y muy cariñoso. Le encanta caminar tranquilo y dormir cerca de las personas. Sueña con un hogar donde no vuelva a sentir frío ni miedo. Adoptarlo es darle seguridad y recibir amor sincero. Bobby promete lealtad, compañía y paciencia. No necesita lujos, solo tiempo y cariño. Él está listo para empezar de nuevo. Tal vez tu hogar sea el lugar donde por fin pueda descansar tranquilo.`
    },
    {
        id: 2,
        name: 'Golden Retriever',
        image: goldenRetrieverImg,
        description: `Maya 
Maya es una perrita dulce que observa todo con curiosidad. Al principio es tímida, pero cuando confía, entrega su corazón completo. Maya fue rescatada y ahora espera una familia que la cuide. Le gusta el sol, las caricias suaves y la calma. Adoptarla es enseñarle que el amor puede durar. Maya llenará tu hogar de ternura y tranquilidad. No pide mucho, solo respeto y constancia. Ella se adaptará a tu ritmo y estará siempre cerca. Maya merece una vida mejor, con un final feliz junto a personas que la amen.`
    },
    {
        id: 3,
        name: 'Labrador Retriever',
        image: labradorImg,
        description: `Tigre
Tigre es un perrito lleno de energía y entusiasmo. Cada día despierta listo para jugar y aprender. Aunque fue abandonado, sigue confiando en las personas. Tigre necesita un hogar activo donde pueda correr y sentirse libre. Adoptarlo es ganar un compañero alegre y fiel. Él te acompañará en paseos, juegos y momentos importantes. Tigre aprende rápido y responde al cariño. No lo dejes crecer sin familia. Con paciencia y amor, se convertirá en tu mejor amigo. Tigre no quiere pasar su vida esperando. Quiero compartirla contigo desde hoy.`
    },
    {
        id: 4,
        name: 'Rottweiler',
        image: rottweilerImg,
        description: `Sol
 Sol es una perrita tranquila que transmite paz. Le gusta observar, descansar y acompañar en silencio. Su pasado no fue fácil, pero aún confía. Sol espera una familia que la elija con compromiso. Adoptarla es darle estabilidad y recibir amor sereno. Ella no exige atención constante, solo presencia y cariño. Sol será tu compañía en días largos y noches tranquilas. No necesita grandes espacios, sólo un lugar seguro. Adoptar a Sol es un acto de amor consciente. Ella está lista para cerrar heridas y comenzar una vida nueva llena de calma y respeto.`
    },
    {
        id: 5,
        name: 'Gran Danés',
        image: greatDaneImg,
        description: `Chispa
Chispa hace honor a su nombre. Es alegre, curiosa y siempre quiere jugar. A pesar de haber sido rechazada, mantiene su energía positiva. Chispa necesita un hogar donde pueda correr y sentirse querida. Adoptarla es sumar alegría a tu vida. Ella llenará tu casa de movimiento, risas y amor. Chispa es sociable y cariñosa. No guarda rencor, solo esperanza. Dale una oportunidad y ella te dará su lealtad. Adoptar es cambiar una vida. Chispa está esperando a alguien que le demuestre que el amor verdadero sí existe.`
    },
    {
        id: 6,
        name: 'San Bernardo',
        image: stBernardImg,
        description: `Leo
Leo es un perrito paciente y observador. Prefiere caminar despacio y disfrutar cada momento. Leo fue rescatada y ahora sueña con un hogar definitivo. Adoptarlo es ofrecerle tranquilidad y recibir compañía fiel. Él estará contigo sin pedir nada a cambio. Leo es ideal para personas que valoran la calma. Le gusta descansar cerca y sentirse protegido. No necesita mucho, solo amor constante. Leo merece una familia que no lo abandone. Él está listo para compartir su vida con alguien que lo elija todos los días, sin condiciones.`
    },
    {
        id: 7,
        name: 'Dóberman Pinscher',
        image: dobermanImg,
        description: `Nube
Nube es pequeña, suave y muy cariñosa. Le encanta acurrucarse y sentirse segura. A pesar de su tamaño, tiene un corazón enorme. Nube fue encontrada sola, pero nunca dejó de confiar. Adoptarla es darle protección y recibir ternura infinita. Ella se adapta fácilmente y agradece cada gesto. Nube llenará tu hogar de calma y dulzura. No necesita grandes cuidados, solo cariño sincero. Adoptar a Nube es prometerle que esta vez será para siempre. Ella está lista para ser parte de una familia que la cuide con amor.`
    },
    {
        id: 8,
        name: 'Mastín Inglés',
        image: englishMastiffImg,
        description: `Roco 
Roco es fuerte, leal y muy protector. Aunque su aspecto impone, es un perrito noble y sensible. Roco fue abandonado, pero aún cree en las personas. Adoptarlo es darle una oportunidad y recibir lealtad eterna. Él cuidará tu hogar y tu corazón. Roco necesita una familia responsable y cariñosa. Con disciplina y afecto, será el mejor compañero. No lo juzgues por su tamaño. Roco solo quiere pertenecer. Dale un hogar y él te demostrará que el amor verdadero también tiene cuatro patas.`
    },
    {
        id: 9,
        name: 'Akita Inu',
        image: akitaImg,
        description: `Daisy 

Daisy es alegre y muy expresiva. Sus ojos brillan cuando recibe atención. Daisy fue rescatada y ahora espera una familia. Adoptarla es elegir amor y compromiso. Ella te acompañará en cada momento y celebrará tu presencia. Daisy es juguetona y cariñosa. Se adapta fácilmente a nuevos entornos. No entiende el abandono, pero está lista para amar otra vez. Dale una oportunidad y ella llenará tu vida de felicidad. Daisy no quiere pasar más tiempo esperando. Quiere empezar hoy una historia nueva junto a personas que la valoren y cuiden siempre.`
    },
    {
        id: 10,
        name: 'Alaskan Malamute',
        image: malamuteImg,
        description: `Pancho 
Pancho es tranquilo y muy agradecido. Cada caricia la recibe como un regalo. Pancho fue rescatado y ahora busca un hogar donde sentirse seguro. Adoptarlo es ganar un amigo fiel y silencioso. Él estará a tu lado en los días buenos y malos. Pancho no exige atención, solo compañía. Le gusta dormir cerca y caminar despacio. Pancho merece una familia que lo cuide hasta el final. Dale una oportunidad y él te dará amor sincero. Adoptar a Pancho es cambiar su destino y llenar tu vida de calma.`
    },
    {
        id: 11,
        name: 'Terranova',
        image: newfoundlandImg,
        description: `Kira
Kira es inteligente y curiosa. Aprende rápido y disfruta los retos. Aunque fue abandonada, mantiene su entusiasmo. Kira necesita un hogar donde pueda crecer y sentirse querida. Adoptarla es asumir responsabilidad y recibir amor incondicional. Ella será tu compañera fiel en cada aventura. Kira disfruta los paseos y la atención. Con cariño y paciencia, se adaptará fácilmente. No la dejes esperar más. Kira merece una familia que la guíe y la ame. Adoptar es un acto de amor, y Kira está lista para comenzar una nueva vida.`
    },
    {
        id: 12,
        name: 'Boyero de Berna',
        image: berneseMountainImg,
        description: `Brisa
Brisa es delicada y observadora. Prefiere ambientes tranquilos y personas pacientes. Brisa fue rescatada y ahora busca un hogar seguro. Adoptarla es enseñarle que el mundo también puede ser bueno. Ella te regalará ternura y gratitud. Brisa se adapta poco a poco y confía con amor. No necesita ruidos ni prisas, solo respeto. Adoptar a Brisa es comprometerse con su bienestar. Ella llenará tu vida de momentos tranquilos y sinceros. Brisa merece un final feliz, rodeada de personas que la cuiden con amor verdadero.`
    },
    {
        id: 13,
        name: 'Cane Corso',
        image: caneCorsoImg,
        description: `Loki
Loki es juguetón y muy sociable. Le encanta estar rodeado de personas. Loki fue abandonado, pero nunca perdió la alegría. Adoptarlo es sumar diversión a tu hogar. Él llenará tus días de risas y movimiento. Loki necesita paseos, juegos y atención. A cambio ofrece amor eterno. Es cariñoso y leal. No permitas que crezca sin familia. Loki merece un hogar donde pueda ser feliz. Adoptar es una decisión que cambia vidas. La suya y la tuya. Loki está listo para empezar una historia llena de amor.`
    },
    {
        id: 14,
        name: 'Pastor Belga',
        image: malinoisImg,
        description: `Perla 
 Perla es elegante, tranquila y muy dulce. Le gusta descansar y observar en silencio. Perla fue rescatada y ahora espera una familia estable. Adoptarla es ofrecerle seguridad y recibir amor sereno. Ella será una compañía fiel y constante. Perla no necesita mucho espacio, solo cariño. Agradece cada gesto con miradas sinceras. No la dejes esperar más. Perla merece un hogar donde nunca más tenga miedo. Adoptar es un acto de amor profundo. Ella está lista para compartir su vida contigo, con respeto y ternura infinita.`
    },
    {
        id: 15,
        name: 'Dogo Argentino',
        image: dogoArgentinoImg,
        description: `Tito
 Tito es curioso y valiente. A pesar de su tamaño, tiene un espíritu grande. Tito fue abandonado, pero sigue confiando. Adoptarlo es darle protección y recibir alegría diaria. Él te acompañará a todos lados y celebrará cada momento. Tito es cariñoso y juguetón. No pide mucho, solo amor y cuidado. Dale una oportunidad y él te dará su corazón completo. Tito no quiere pasar su vida esperando. Quiere un hogar donde crecer, aprender y amar. Tal vez tú seas la persona que estaba esperando.`
    }
];

export const LargeBreedsPage = () => {
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
                    Razas Grandes
                </h1>
                <div className="w-24 hidden sm:block"></div> {/* Spacer for alignment */}
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
