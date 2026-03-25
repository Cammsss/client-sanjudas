import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaTimes, FaPaw, FaDog } from 'react-icons/fa';
import { SuccessDialog } from './SuccessDialog';
import { useAdoptionForm } from '../../hooks/useAdoptionForm';

export const AdoptionFormModal = ({ isOpen, onClose, dogName }) => {
    const {
        formData,
        isSubmitting,
        showSuccessModal,
        handleChange,
        handleSubmit,
        handleSuccessConfirm
    } = useAdoptionForm(onClose, dogName);

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[60]" onClose={onClose}>
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
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-2xl transition-all border-none relative">

                                    <div className="p-8 bg-gray-50">
                                        <div className="flex justify-between items-center mb-8">
                                            <div className="flex items-center gap-3 justify-center w-full relative">
                                                <FaPaw className="text-orange-500 text-3xl" />
                                                <h2 className="text-3xl font-extrabold text-[#1a365d]">Registro para adoptar</h2>
                                                <FaPaw className="text-orange-500 text-3xl" />
                                            </div>
                                            <button
                                                onClick={onClose}
                                                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                                            >
                                                <FaTimes size={24} />
                                            </button>
                                        </div>

                                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Nombre y apellidos */}
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-bold text-gray-600 mb-1">Nombre y apellidos <span className="text-red-500">*</span></label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    required
                                                    placeholder="Nombre completo"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white placeholder:text-gray-400 shadow-lg"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* Correo */}
                                            <div>
                                                <label className="block text-sm font-bold text-gray-600 mb-1">Correo electrónico (usuario) <span className="text-red-500">*</span></label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    placeholder="ejemplo@correo.com"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white placeholder:text-gray-400 shadow-lg"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-600 mb-1">Repite correo electrónico <span className="text-red-500">*</span></label>
                                                <input
                                                    type="email"
                                                    name="confirmEmail"
                                                    required
                                                    placeholder="ejemplo@correo.com"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white placeholder:text-gray-400 shadow-lg"
                                                    value={formData.confirmEmail}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* Contraseña */}
                                            <div>
                                                <label className="block text-sm font-bold text-gray-600 mb-1">Contraseña <span className="text-red-500">*</span></label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    required
                                                    placeholder="Contraseña (Mínimo 6 caracteres)"
                                                    minLength={6}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white placeholder:text-gray-400 shadow-lg"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-600 mb-1">Repite contraseña <span className="text-red-500">*</span></label>
                                                <input
                                                    type="password"
                                                    name="confirmPassword"
                                                    required
                                                    placeholder="Repite contraseña"
                                                    minLength={6}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white placeholder:text-gray-400 shadow-lg"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-bold text-gray-600 mb-1">Fecha de nacimiento <span className="text-red-500">*</span></label>
                                                <input
                                                    type="date"
                                                    name="birthDate"
                                                    required
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white shadow-lg"
                                                    value={formData.birthDate}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* Teléfono */}
                                            <div>
                                                <label className="block text-sm font-bold text-gray-600 mb-1">Teléfono <span className="text-red-500">*</span></label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    required
                                                    placeholder="12345678"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white placeholder:text-gray-400 shadow-lg"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-600 mb-1">Repite teléfono <span className="text-red-500">*</span></label>
                                                <input
                                                    type="tel"
                                                    name="confirmPhone"
                                                    required
                                                    placeholder="12345678"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white placeholder:text-gray-400 shadow-lg"
                                                    value={formData.confirmPhone}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* País */}
                                            <div className="md:col-span-1">
                                                <label className="block text-sm font-bold text-gray-600 mb-1">País <span className="text-red-500">*</span></label>
                                                <select
                                                    name="country"
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-300 focus:ring focus:ring-orange-200 transition-all bg-white appearance-none shadow-lg"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                >
                                                    <option value="Guatemala">Guatemala</option>
                                                    <option value="México">México</option>
                                                    <option value="El Salvador">El Salvador</option>
                                                    <option value="Honduras">Honduras</option>
                                                    <option value="Otro">Otro</option>
                                                </select>
                                            </div>



                                            {/* Submit Button */}
                                            <div className="md:col-span-2 flex justify-center mt-6 relative">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className={`bg-[#2A3748] text-white font-bold py-3 px-12 rounded-lg hover:bg-[#1a202c] transition-colors shadow-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                >
                                                    {isSubmitting ? 'Enviando...' : 'Registrarse'}
                                                </button>

                                                {/* Cute Dog Icon Bottom Right */}
                                                <div className="absolute -bottom-8 -right-8 hidden md:block">
                                                    {/* Using a paw icon as placeholder for the dog illustration in the image if we can't use an image directly. 
                                                     The user wants it to look like the image. I will try to find a similar dog icon or just leave it clean.
                                                     I'll use a large paw icon for now.
                                                  */}
                                                    <FaDog className="text-6xl text-[#D99F80]" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <SuccessDialog
                isOpen={showSuccessModal}
                onConfirm={handleSuccessConfirm}
                email={formData.email}
            />
        </>
    );
};
