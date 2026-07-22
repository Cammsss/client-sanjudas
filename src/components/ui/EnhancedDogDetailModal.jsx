import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { FaPaw, FaTimes, FaInfoCircle, FaUtensils, FaHeartbeat, FaDog, FaBone, FaHome, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { AdoptionFormModal } from './AdoptionFormModal';

const Tooltip = ({ content, children }) => {
    const [show, setShow] = useState(false);
    
    return (
        <div className="relative inline-block">
            <div 
                className="inline-flex items-center cursor-help"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {children}
                <FaInfoCircle className="ml-1 text-[#9D7E6B] text-sm opacity-60 hover:opacity-100 transition-opacity" />
            </div>
            {show && (
                <div className="absolute z-50 w-64 p-3 bg-[#5c3d2e] text-white text-xs rounded-lg shadow-xl -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                        {content}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                            <div className="border-8 border-transparent border-t-[#5c3d2e]"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const AccordionItem = ({ title, icon: Icon, children, defaultOpen = false, tooltip }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
        <div className="border-b border-[#9D7E6B]/30 last:border-b-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-[#FDEBE2]/50 hover:bg-[#FDEBE2] transition-colors rounded-t-lg"
            >
                <div className="flex items-center gap-3">
                    <Icon className="text-[#9D7E6B] text-lg" />
                    <span className="font-bold text-[#5c3d2e] uppercase tracking-wide text-sm">{title}</span>
                    {tooltip && <Tooltip content={tooltip}><span className="text-xs text-[#9D7E6B]">ℹ️</span></Tooltip>}
                </div>
                {isOpen ? <FaChevronUp className="text-[#9D7E6B]" /> : <FaChevronDown className="text-[#9D7E6B]" />}
            </button>
            {isOpen && (
                <div className="p-4 bg-white/80 animate-in fade-in slide-in-from-top-2 duration-200">
                    {children}
                </div>
            )}
        </div>
    );
};

export const EnhancedDogDetailModal = ({ isOpen, onClose, dog }) => {
    const [isAdoptionFormOpen, setIsAdoptionFormOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        if (!isOpen) {
            setIsAdoptionFormOpen(false);
            setActiveTab(0);
        }
    }, [isOpen]);

    if (!dog) return null;

    // Datos de ejemplo para las nuevas secciones (en producción, estos vendrían del backend)
    const dogProfile = {
        alimentacion: {
            tipoComida: { value: 'adulto', label: 'Adulto' },
            porcionesDiarias: { cantidad: '2 tazas', frecuencia: '2 veces al día' },
            restriccionesMedicas: {
                tieneRestricciones: false,
                detalles: '',
                alimentosEvitar: []
            },
            tooltip: 'Una alimentación adecuada es fundamental para la salud y longevidad de tu mascota. Consulta siempre con un veterinario.'
        },
        cuidadosBasicos: {
            cepillado: { frecuencia: '3 veces por semana', tipoPelo: 'Corto', herramientasRecomendadas: ['Cepillo de cerdas suaves', 'Guante de aseo'] },
            ejercicio: { nivel: 'medio', minutosDiarios: 45, tipoActividad: 'Caminatas y juegos moderados' },
            salud: { vacunasAlDia: true, desparasitacionesAlDia: true, proximaVacuna: 'En 6 meses', proximaDesparasitacion: 'En 3 meses' },
            aseo: { banioFrecuencia: 'Cada 4-6 semanas', corteUñas: 'Cada 3-4 semanas', limpiezaOidos: 'Semanal', cuidadoDental: 'Diario con cepillo dental' },
            tooltip: 'Los cuidados regulares previenen enfermedades y fortalecen el vínculo con tu mascota.'
        },
        comportamiento: {
            convivenciaNinos: { compatible: true, edadMinima: '5 años', observaciones: 'Es paciente pero necesita supervisión' },
            relacionPerros: { compatible: true, preferencias: 'Prefiere perros de tamaño similar', observaciones: 'Socializado con otros perros' },
            relacionGatos: { compatible: false, observaciones: 'Requiere entrenamiento gradual' },
            nivelEnergia: { valor: 'medio', descripcion: 'Equilibrado: disfruta juegos pero también descanso' },
            toleranciaSoledad: { horasMaximas: 4, recomendaciones: 'Necesitas compañía frecuente, no dejar solo más de 4 horas' },
            tooltip: 'Entender el comportamiento ayuda a crear un ambiente armonioso para todos.'
        },
        juegosFavoritos: {
            actividadesPreferidas: [
                { nombre: 'Cobrar la pelota', descripcion: 'Le encanta perseguir y traer pelotas', duracion: '15-20 minutos' },
                { nombre: 'Juegos de olfato', descripcion: 'Busca escondites con premios', duracion: '10-15 minutos' },
                { nombre: 'Caminatas largas', descripcion: 'Explora nuevos senderos con entusiasmo', duracion: '30-45 minutos' }
            ],
            juguetesRecomendados: [
                { tipo: 'Pelotas de goma', razon: 'Resistentes y seguras', seguridad: 'Supervisar el uso' },
                { tipo: 'Cuerdas de mordisco', razon: 'Ayudan con la higiene dental', seguridad: 'Adecuadas para su tamaño' },
                { tipo: 'Juguetes de olfato', razon: 'Estimulan mentalmente', seguridad: 'Sin piezas pequeñas' }
            ],
            juegosEvitar: ['Juegos de fuerza excesiva', 'Juguetes con partes pequeñas'],
            tooltip: 'El juego es esencial para el bienestar físico y mental de tu perro.'
        },
        recomendacionesPostAdopcion: {
            primerosDias: {
                periodoAdaptacion: 'Las primeras 3 semanas son cruciales para la adaptación',
                preparacionEspacio: ['Crear un área segura con cama y juguetes', 'Eliminar objetos peligrosos', 'Tener comida y agua accesibles'],
                rutinasEstablecer: ['Horarios fijos de comida', 'Paseos a la misma hora', 'Momentos de descanso']
            },
            consejosSemana1: ['Dar espacio y no forzar interacciones', 'Establecer rutinas básicas', 'Usar refuerzo positivo', 'Supervisar siempre'],
            consejosSemana2: ['Incrementar gradualmente las actividades', 'Presentar nuevas áreas de la casa', 'Continuar con el entrenamiento básico'],
            consejosSemana3: ['Consolidar rutinas establecidas', 'Fomentar más interacción social', 'Evaluar adaptación al veterinario'],
            senalesAdaptacion: ['Come y duerme normalmente', 'Muestra curiosidad', 'Responde a su nombre', 'Juega activamente'],
            cuandoContactarVeterinario: 'Si muestra pérdida de apetito, letargo, agresividad o problemas de salud durante las primeras 2 semanas',
            tooltip: 'Una transición gradual y paciente asegura una adaptación exitosa.'
        }
    };

    const tabs = [
        { name: 'Información Básica', icon: FaPaw },
        { name: 'Alimentación', icon: FaUtensils },
        { name: 'Cuidados', icon: FaHeartbeat },
        { name: 'Comportamiento', icon: FaDog },
        { name: 'Juegos', icon: FaBone },
        { name: 'Recomendaciones', icon: FaHome }
    ];

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={onClose}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-[#FDEBE2] text-left align-middle shadow-2xl transition-all border-4 border-[#9D7E6B]">
                                    <div className="relative">
                                        <button
                                            onClick={onClose}
                                            className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full text-[#9D7E6B] hover:bg-white hover:text-[#7a5e4d] transition-colors shadow-lg"
                                        >
                                            <FaTimes size={24} />
                                        </button>

                                        <div className="h-48 sm:h-56 w-full bg-[#fcece3] flex items-center justify-center overflow-hidden">
                                            <img
                                                src={dog.image}
                                                alt={dog.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/600x400/FAC19E/9D7E6B?text=ALOA+Mascotas';
                                                }}
                                            />
                                        </div>

                                        <div className="p-6">
                                            <Dialog.Title
                                                as="h2"
                                                className="text-2xl sm:text-3xl font-extrabold leading-6 text-[#9D7E6B] mb-2 uppercase tracking-wider flex flex-wrap items-center gap-2"
                                            >
                                                <FaPaw className="text-[#FAC19E]" />
                                                <span>{dog.name}</span>
                                                {dog.breedName && (
                                                    <span className="text-sm font-bold bg-[#FAC19E] text-[#5c3d2e] px-3 py-1 rounded-full normal-case tracking-normal">
                                                        {dog.breedName}
                                                    </span>
                                                )}
                                            </Dialog.Title>

                                            <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
                                                <Tab.List className="flex space-x-1 rounded-xl bg-[#9D7E6B]/20 p-1 mt-4 overflow-x-auto">
                                                    {tabs.map((tab, index) => (
                                                        <Tab
                                                            key={index}
                                                            className={({ selected }) =>
                                                                `flex items-center gap-2 whitespace-nowrap rounded-lg py-2.5 px-3 text-sm font-bold leading-5 transition-all
                                                                ${selected
                                                                    ? 'bg-[#FAC19E] text-[#5c3d2e] shadow'
                                                                    : 'text-[#5c3d2e]/70 hover:bg-[#FAC19E]/50 hover:text-[#5c3d2e]'
                                                                }`
                                                            }
                                                        >
                                                            <tab.icon size={14} />
                                                            {tab.name}
                                                        </Tab>
                                                    ))}
                                                </Tab.List>
                                                <Tab.Panels className="mt-4">
                                                    <Tab.Panel className="rounded-xl bg-white/60 p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-[#FDEBE2] focus:outline-none">
                                                        <div className="space-y-4">
                                                            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line font-medium text-justify italic">
                                                                {dog.history}
                                                            </p>
                                                        </div>
                                                    </Tab.Panel>

                                                    <Tab.Panel className="rounded-xl bg-white/60 p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-[#FDEBE2] focus:outline-none">
                                                        <AccordionItem 
                                                            title="Tipo de Comida" 
                                                            icon={FaUtensils}
                                                            tooltip={dogProfile.alimentacion.tooltip}
                                                            defaultOpen={true}
                                                        >
                                                            <div className="space-y-3">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="font-bold text-[#9D7E6B]">Tipo:</span>
                                                                    <span className="bg-[#FAC19E] text-[#5c3d2e] px-3 py-1 rounded-full text-sm font-semibold">
                                                                        {dogProfile.alimentacion.tipoComida.label}
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <span className="font-bold text-[#9D7E6B]">Porciones:</span>
                                                                    <span>{dogProfile.alimentacion.porcionesDiarias.cantidad} - {dogProfile.alimentacion.porcionesDiarias.frecuencia}</span>
                                                                </div>
                                                                {dogProfile.alimentacion.restriccionesMedicas.tieneRestricciones && (
                                                                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                                                                        <p className="font-bold text-red-700 mb-1">⚠️ Restricciones Médicas:</p>
                                                                        <p className="text-red-600 text-sm">{dogProfile.alimentacion.restriccionesMedicas.detalles}</p>
                                                                        <p className="text-red-600 text-sm mt-1">Evitar: {dogProfile.alimentacion.restriccionesMedicas.alimentosEvitar.join(', ')}</p>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </AccordionItem>
                                                    </Tab.Panel>

                                                    <Tab.Panel className="rounded-xl bg-white/60 p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-[#FDEBE2] focus:outline-none">
                                                        <div className="space-y-2">
                                                            <AccordionItem 
                                                                title="Cepillado y Aseo" 
                                                                icon={FaHeartbeat}
                                                                tooltip={dogProfile.cuidadosBasicos.tooltip}
                                                                defaultOpen={true}
                                                            >
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                    <div className="bg-[#FDEBE2]/50 p-3 rounded-lg">
                                                                        <p className="font-bold text-[#9D7E6B] mb-2">🪮 Cepillado</p>
                                                                        <p className="text-sm text-gray-700">{dogProfile.cuidadosBasicos.cepillado.frecuencia}</p>
                                                                        <p className="text-xs text-gray-600 mt-1">Tipo: {dogProfile.cuidadosBasicos.cepillado.tipoPelo}</p>
                                                                        <p className="text-xs text-gray-600 mt-1">Herramientas: {dogProfile.cuidadosBasicos.cepillado.herramientasRecomendadas.join(', ')}</p>
                                                                    </div>
                                                                    <div className="bg-[#FDEBE2]/50 p-3 rounded-lg">
                                                                        <p className="font-bold text-[#9D7E6B] mb-2">🛁 Aseo General</p>
                                                                        <p className="text-sm text-gray-700">Baño: {dogProfile.cuidadosBasicos.aseo.banioFrecuencia}</p>
                                                                        <p className="text-sm text-gray-700">Uñas: {dogProfile.cuidadosBasicos.aseo.corteUñas}</p>
                                                                        <p className="text-sm text-gray-700">Oídos: {dogProfile.cuidadosBasicos.aseo.limpiezaOidos}</p>
                                                                        <p className="text-sm text-gray-700">Dental: {dogProfile.cuidadosBasicos.aseo.cuidadoDental}</p>
                                                                    </div>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Ejercicio Diario" icon={FaHeartbeat}>
                                                                <div className="bg-[#FDEBE2]/50 p-3 rounded-lg">
                                                                    <div className="flex items-center gap-3 mb-2">
                                                                        <span className="font-bold text-[#9D7E6B]">Nivel:</span>
                                                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                                            dogProfile.cuidadosBasicos.ejercicio.nivel === 'alto' ? 'bg-green-100 text-green-700' :
                                                                            dogProfile.cuidadosBasicos.ejercicio.nivel === 'medio' ? 'bg-yellow-100 text-yellow-700' :
                                                                            'bg-blue-100 text-blue-700'
                                                                        }`}>
                                                                            {dogProfile.cuidadosBasicos.ejercicio.nivel.toUpperCase()}
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-sm text-gray-700">{dogProfile.cuidadosBasicos.ejercicio.minutosDiarios} minutos diarios - {dogProfile.cuidadosBasicos.ejercicio.tipoActividad}</p>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Salud y Vacunas" icon={FaHeartbeat}>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                                    <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                                                                        <p className="font-bold text-green-700">💉 Vacunas</p>
                                                                        <p className="text-sm text-green-600">{dogProfile.cuidadosBasicos.salud.vacunasAlDia ? '✅ Al día' : '⚠️ Pendientes'}</p>
                                                                        <p className="text-xs text-green-600 mt-1">Próxima: {dogProfile.cuidadosBasicos.salud.proximaVacuna}</p>
                                                                    </div>
                                                                    <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                                                                        <p className="font-bold text-green-700">🦠 Desparasitaciones</p>
                                                                        <p className="text-sm text-green-600">{dogProfile.cuidadosBasicos.salud.desparasitacionesAlDia ? '✅ Al día' : '⚠️ Pendientes'}</p>
                                                                        <p className="text-xs text-green-600 mt-1">Próxima: {dogProfile.cuidadosBasicos.salud.proximaDesparasitacion}</p>
                                                                    </div>
                                                                </div>
                                                            </AccordionItem>
                                                        </div>
                                                    </Tab.Panel>

                                                    <Tab.Panel className="rounded-xl bg-white/60 p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-[#FDEBE2] focus:outline-none">
                                                        <div className="space-y-2">
                                                            <AccordionItem 
                                                                title="Convivencia con Familia" 
                                                                icon={FaDog}
                                                                tooltip={dogProfile.comportamiento.tooltip}
                                                                defaultOpen={true}
                                                            >
                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                                    <div className={`p-3 rounded-lg border-2 ${dogProfile.comportamiento.convivenciaNinos.compatible ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                                                                        <p className="font-bold text-sm mb-1">👶 Niños</p>
                                                                        <p className="text-xs">{dogProfile.comportamiento.convivenciaNinos.compatible ? '✅ Compatible' : '⚠️ Requiere cuidado'}</p>
                                                                        <p className="text-xs text-gray-600 mt-1">Edad mín: {dogProfile.comportamiento.convivenciaNinos.edadMinima}</p>
                                                                    </div>
                                                                    <div className={`p-3 rounded-lg border-2 ${dogProfile.comportamiento.relacionPerros.compatible ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                                                                        <p className="font-bold text-sm mb-1">🐕 Otros Perros</p>
                                                                        <p className="text-xs">{dogProfile.comportamiento.relacionPerros.compatible ? '✅ Compatible' : '⚠️ Requiere supervisión'}</p>
                                                                        <p className="text-xs text-gray-600 mt-1">{dogProfile.comportamiento.relacionPerros.observaciones}</p>
                                                                    </div>
                                                                    <div className={`p-3 rounded-lg border-2 ${dogProfile.comportamiento.relacionGatos.compatible ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}>
                                                                        <p className="font-bold text-sm mb-1">🐱 Gatos</p>
                                                                        <p className="text-xs">{dogProfile.comportamiento.relacionGatos.compatible ? '✅ Compatible' : '⚠️ Requiere entrenamiento'}</p>
                                                                        <p className="text-xs text-gray-600 mt-1">{dogProfile.comportamiento.relacionGatos.observaciones}</p>
                                                                    </div>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Nivel de Energía" icon={FaDog}>
                                                                <div className="bg-[#FDEBE2]/50 p-3 rounded-lg">
                                                                    <div className="flex items-center gap-3 mb-2">
                                                                        <span className="font-bold text-[#9D7E6B]">Nivel:</span>
                                                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                                            dogProfile.comportamiento.nivelEnergia.valor === 'alto' ? 'bg-green-100 text-green-700' :
                                                                            dogProfile.comportamiento.nivelEnergia.valor === 'medio' ? 'bg-yellow-100 text-yellow-700' :
                                                                            'bg-blue-100 text-blue-700'
                                                                        }`}>
                                                                            {dogProfile.comportamiento.nivelEnergia.valor.toUpperCase()}
                                                                        </span>
                                                                    </div>
                                                                    <p className="text-sm text-gray-700">{dogProfile.comportamiento.nivelEnergia.descripcion}</p>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Tolerancia a la Soledad" icon={FaDog}>
                                                                <div className={`p-3 rounded-lg ${dogProfile.comportamiento.toleranciaSoledad.horasMaximas <= 4 ? 'bg-yellow-50 border border-yellow-300' : 'bg-green-50 border border-green-300'}`}>
                                                                    <p className="font-bold text-[#9D7E6B] mb-2">⏰ Máximo solo: {dogProfile.comportamiento.toleranciaSoledad.horasMaximas} horas</p>
                                                                    <p className="text-sm text-gray-700">{dogProfile.comportamiento.toleranciaSoledad.recomendaciones}</p>
                                                                </div>
                                                            </AccordionItem>
                                                        </div>
                                                    </Tab.Panel>

                                                    <Tab.Panel className="rounded-xl bg-white/60 p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-[#FDEBE2] focus:outline-none">
                                                        <AccordionItem 
                                                            title="Actividades Favoritas" 
                                                            icon={FaBone}
                                                            tooltip={dogProfile.juegosFavoritos.tooltip}
                                                            defaultOpen={true}
                                                        >
                                                            <div className="space-y-3">
                                                                {dogProfile.juegosFavoritos.actividadesPreferidas.map((actividad, idx) => (
                                                                    <div key={idx} className="bg-[#FDEBE2]/50 p-3 rounded-lg">
                                                                        <p className="font-bold text-[#9D7E6B]">🎾 {actividad.nombre}</p>
                                                                        <p className="text-sm text-gray-700">{actividad.descripcion}</p>
                                                                        <p className="text-xs text-gray-600 mt-1">Duración: {actividad.duracion}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </AccordionItem>
                                                        <AccordionItem title="Juguetes Recomendados" icon={FaBone}>
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                                {dogProfile.juegosFavoritos.juguetesRecomendados.map((juguete, idx) => (
                                                                    <div key={idx} className="bg-[#FDEBE2]/50 p-3 rounded-lg">
                                                                        <p className="font-bold text-[#9D7E6B] text-sm">🧸 {juguete.tipo}</p>
                                                                        <p className="text-xs text-gray-700">{juguete.razon}</p>
                                                                        <p className="text-xs text-gray-600 mt-1">⚠️ {juguete.seguridad}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </AccordionItem>
                                                        <AccordionItem title="Juegos a Evitar" icon={FaBone}>
                                                            <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                                                                <p className="font-bold text-red-700 mb-2">⚠️ Evitar:</p>
                                                                <ul className="list-disc list-inside text-sm text-red-600 space-y-1">
                                                                    {dogProfile.juegosFavoritos.juegosEvitar.map((juego, idx) => (
                                                                        <li key={idx}>{juego}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </AccordionItem>
                                                    </Tab.Panel>

                                                    <Tab.Panel className="rounded-xl bg-white/60 p-4 ring-white ring-opacity-60 ring-offset-2 ring-offset-[#FDEBE2] focus:outline-none">
                                                        <div className="space-y-2">
                                                            <AccordionItem 
                                                                title="Primeros Días en Casa" 
                                                                icon={FaHome}
                                                                tooltip={dogProfile.recomendacionesPostAdopcion.tooltip}
                                                                defaultOpen={true}
                                                            >
                                                                <div className="bg-[#FDEBE2]/50 p-3 rounded-lg mb-3">
                                                                    <p className="font-bold text-[#9D7E6B] mb-2">📅 Periodo de Adaptación</p>
                                                                    <p className="text-sm text-gray-700">{dogProfile.recomendacionesPostAdopcion.primerosDias.periodoAdaptacion}</p>
                                                                </div>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                    <div className="bg-blue-50 p-3 rounded-lg">
                                                                        <p className="font-bold text-blue-700 mb-2">🏠 Preparación del Espacio</p>
                                                                        <ul className="list-disc list-inside text-xs text-blue-600 space-y-1">
                                                                            {dogProfile.recomendacionesPostAdopcion.primerosDias.preparacionEspacio.map((item, idx) => (
                                                                                <li key={idx}>{item}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    <div className="bg-blue-50 p-3 rounded-lg">
                                                                        <p className="font-bold text-blue-700 mb-2">⏰ Rutinas a Establecer</p>
                                                                        <ul className="list-disc list-inside text-xs text-blue-600 space-y-1">
                                                                            {dogProfile.recomendacionesPostAdopcion.primerosDias.rutinasEstablecer.map((item, idx) => (
                                                                                <li key={idx}>{item}</li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Semana 1" icon={FaHome}>
                                                                <div className="bg-green-50 p-3 rounded-lg">
                                                                    <ul className="list-disc list-inside text-sm text-green-700 space-y-2">
                                                                        {dogProfile.recomendacionesPostAdopcion.consejosSemana1.map((consejo, idx) => (
                                                                            <li key={idx}>{consejo}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Semana 2" icon={FaHome}>
                                                                <div className="bg-yellow-50 p-3 rounded-lg">
                                                                    <ul className="list-disc list-inside text-sm text-yellow-700 space-y-2">
                                                                        {dogProfile.recomendacionesPostAdopcion.consejosSemana2.map((consejo, idx) => (
                                                                            <li key={idx}>{consejo}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Semana 3" icon={FaHome}>
                                                                <div className="bg-orange-50 p-3 rounded-lg">
                                                                    <ul className="list-disc list-inside text-sm text-orange-700 space-y-2">
                                                                        {dogProfile.recomendacionesPostAdopcion.consejosSemana3.map((consejo, idx) => (
                                                                            <li key={idx}>{consejo}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Señales de Adaptación" icon={FaHome}>
                                                                <div className="bg-[#FDEBE2]/50 p-3 rounded-lg">
                                                                    <p className="font-bold text-[#9D7E6B] mb-2">✅ Señales positivas:</p>
                                                                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                                                        {dogProfile.recomendacionesPostAdopcion.senalesAdaptacion.map((senal, idx) => (
                                                                            <li key={idx}>{senal}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </AccordionItem>
                                                            <AccordionItem title="Cuándo Contactar al Veterinario" icon={FaHome}>
                                                                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                                                                    <p className="font-bold text-red-700 mb-2">🚨 Contactar si:</p>
                                                                    <p className="text-sm text-red-600">{dogProfile.recomendacionesPostAdopcion.cuandoContactarVeterinario}</p>
                                                                </div>
                                                            </AccordionItem>
                                                        </div>
                                                    </Tab.Panel>
                                                </Tab.Panels>
                                            </Tab.Group>

                                            <div className="mt-6 flex justify-center sticky bottom-0 bg-[#FDEBE2] py-4 border-t border-[#9D7E6B]/20">
                                                <button
                                                    type="button"
                                                    className="inline-flex justify-center rounded-full border border-transparent bg-[#FAC19E] px-8 py-3 text-lg font-bold text-[#5c3d2e] hover:bg-[#ffb685] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9D7E6B] focus-visible:ring-offset-2 shadow-lg transform hover:scale-105 transition-all duration-200"
                                                    onClick={() => setIsAdoptionFormOpen(true)}
                                                >
                                                    ADOPTAR
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <AdoptionFormModal
                isOpen={isAdoptionFormOpen}
                onClose={() => setIsAdoptionFormOpen(false)}
                dogName={dog.name}
            />
        </>
    );
};
