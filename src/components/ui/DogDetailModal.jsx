import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaPaw, FaTimes } from 'react-icons/fa';
import { AdoptionFormModal } from './AdoptionFormModal';

export const DogDetailModal = ({ isOpen, onClose, dog }) => {
    const [isAdoptionFormOpen, setIsAdoptionFormOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsAdoptionFormOpen(false);
        }
    }, [isOpen]);

    if (!dog) return null;

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
                                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-3xl bg-[#FDEBE2] text-left align-middle shadow-2xl transition-all border-4 border-[#9D7E6B]">

                                    <div className="relative">
                                        {/* Close button */}
                                        <button
                                            onClick={onClose}
                                            className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full text-[#9D7E6B] hover:bg-white hover:text-[#7a5e4d] transition-colors shadow-lg"
                                        >
                                            <FaTimes size={24} />
                                        </button>

                                        {/* Image Section */}
                                        <div className="h-64 sm:h-80 w-full bg-[#fcece3] flex items-center justify-center overflow-hidden">
                                            <img
                                                src={dog.image}
                                                alt={dog.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/600x400/FAC19E/9D7E6B?text=ALOA+Mascotas';
                                                }}
                                            />
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 sm:p-8">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-2xl sm:text-3xl font-extrabold leading-6 text-[#9D7E6B] mb-4 uppercase tracking-wider flex items-center gap-2"
                                            >
                                                <FaPaw className="text-[#FAC19E]" />
                                                {dog.breedName || dog.name}
                                            </Dialog.Title>

                                            <div className="mt-4">
                                                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line font-medium">
                                                    {dog.description}
                                                </p>
                                            </div>

                                            <div className="mt-8 flex justify-center">
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
